/*
Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
*/
class Trie {
    constructor() {
        this.root = {};
    }
    
    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            node = node[word[i]] = node[word[i]] || {};
            if (i === word.length - 1) node.isTerminal = true;
        }
    }
    
    search(word, isPrefix) {
        let node = this.root;
        for (let c of word) {
            if (!node[c]) return false;
            node = node[c];
        }
        return isPrefix || !!node.isTerminal;
    }
    
    startsWith(prefix) {
        return this.search(prefix, true);
    }
}