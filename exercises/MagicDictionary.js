/*
Implement a magic directory with buildDict, and search methods.

For the method buildDict, you'll be given a list of non-repetitive words to build a dictionary.

For the method search, you'll be given a word, and judge whether if you modify exactly one character into another character in this word, the modified word is in the dictionary you just built.

Example 1:
Input: buildDict(["hello", "leetcode"]), Output: Null
Input: search("hello"), Output: False
Input: search("hhllo"), Output: True
Input: search("hell"), Output: False
Input: search("leetcoded"), Output: False
Note:
You may assume that all the inputs are consist of lowercase letters a-z.
For contest purpose, the test data is rather small by now. You could think about highly efficient algorithm after the contest.
Please remember to RESET your class variables declared in class MagicDictionary, as static/class variables are persisted across multiple test cases. Please see here for more details.
*/
var Trie = function() {
  this.root = new TrieNode(null);
};
Trie.prototype.add = function(words) {
  let node = this.root;
  for (let i = 0; i < words.length; i++) {
    let idx = caculateIdx(words[i]);
    if (node.chidren[idx]) {
      node = node.chidren[idx];
    } else {
      let newNode = new TrieNode(node);
      node.chidren[idx] = newNode;
      node = newNode;
    }
  }
  node.isWord = true;
  node.wordList.push(words);
};
var TrieNode = function(parent) {
  this.parent = parent;
  this.isWord = false;
  this.chidren = [];
  this.wordList=[];
};

var caculateIdx = function(word) {
  return word.charCodeAt() - 96;
};


var MagicDictionary = function() {};

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
  let trie = new Trie();
  for (let i = 0; i < dict.length; i++) {
    trie.add(dict[i]);
  }
  this.dict = trie;
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (word) {
  let dict = this.dict;
  let node = dict.root;
  let sameDepth = DepthFirst([], node, word.length);
  for(let i=0;i<sameDepth.length;i++){
    let match = sameDepth[i];
    let missmatch = 0;
    for(let j=0;j<word.length;j++){
      if(word[j]!=match[j])missmatch++;
      if(missmatch>1)break;
    }
    if(missmatch === 1){
      return true
    }
  }
  return false;
};

function DepthFirst(arr, node, len) {
  if (len <= 0) {
    node.isWord&&arr.push(...node.wordList);
    return
  }
  if (!node) return;
  if (node.chidren && node.chidren.length) {
    for (let i = 0; i < node.chidren.length; i++) {
      if (node.chidren[i]) {
        DepthFirst(arr, node.chidren[i], len - 1)
      }
    }
  }
  return arr
}