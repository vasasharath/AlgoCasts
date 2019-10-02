/*
Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . 
means it can represent any one letter.

Example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
*/
var TrieNode = function() {
    this.children = {};
    this.isEnd = false;
};

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.root = new TrieNode();
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
var WordDictionary = function() {
    this.lengthSet = new Map();
    this.set = new Set();
    this.all = "";
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    
    const length = word.length;
    if (!this.lengthSet.has(length)) {
        this.lengthSet.set(length, "")
    } 
    let current = this.lengthSet.get(length);
    current += "\n"+word+"\n";
    this.lengthSet.set(length, current);
    this.set.add(word);
    
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  if (this.set.has(word)) {
      return true;
  }  
    if (!this.lengthSet.has(word.length)) {
        return false;
    }
    const lengthS = this.lengthSet.get(word.length);
    let mat = new RegExp(`\n${word}\n`);
    return mat.test(lengthS);
};