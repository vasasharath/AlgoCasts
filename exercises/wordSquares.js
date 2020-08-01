/*
Given a set of words (without duplicates), find all word squares you can build from them.

A sequence of words forms a valid word square if the kth row and column read the exact same string, where 0 ≤ k < max(numRows, numColumns).

For example, the word sequence ["ball","area","lead","lady"] forms a word square because each word reads the same both horizontally and vertically.

b a l l
a r e a
l e a d
l a d y
Note:
There are at least 1 and at most 1000 words.
All words will have the exact same length.
Word length is at least 1 and at most 5.
Each word contains only lowercase English alphabet a-z.
Example 1:

Input:
["area","lead","wall","lady","ball"]

Output:
[
  [ "wall",
    "area",
    "lead",
    "lady"
  ],
  [ "ball",
    "area",
    "lead",
    "lady"
  ]
]

Explanation:
The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).
Example 2:

Input:
["abat","baba","atan","atal"]

Output:
[
  [ "baba",
    "abat",
    "baba",
    "atan"
  ],
  [ "baba",
    "abat",
    "baba",
    "atal"
  ]
]

Explanation:
The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).
*/
class TrieNode {
    constructor() {
        this.words = [];
        this.children = new Map();
    }
}

class Trie {
    constructor(words) {
        const root = new TrieNode();
        for (const w of words) {
            let cur = root;
            for (const c of w) {
                if (!cur.children.has(c)) {
                    cur.children.set(c, new TrieNode());
                }
                cur = cur.children.get(c);
                cur.words.push(w);
            }
        }
        
        this.root = root;
    }
    
    findByPrefix(prefix) {
        let cur = this.root;
        for (const c of prefix) {
            cur = cur.children.get(c);
            if (!cur) {
                return [];
            }
        }
        
        return cur.words;
    }
}

var wordSquares = function(words) {
    if (!words || !words.length) {
        return [];
    }
    
    const trie = new Trie(words);
    const res = [];
    const len = words[0].length;
    
    for (const w of words) {
        const candidate = [w];
        dfs(candidate, 1);
    }
    
    function dfs(candidate, pos) {
        if (pos == len) {
            res.push(candidate.slice());
            return;
        }
        
        // get the next prefix
        let next = '';
        for (const cand of candidate) {
            next += cand[pos];
        }
        
        // get words with prefix
        const words = trie.findByPrefix(next);
        if (!words.length) {
            return;
        }
        
        for (const w of words) {
            candidate.push(w);
            dfs(candidate, pos + 1);
            candidate.length--;
        }
    }
    
    return res;
};