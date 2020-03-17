/*
Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:

Only one letter can be changed at a time
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
Note:

Return an empty list if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: []

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
*/
function generatePotentials (beginWord, dict) {
    const result = [];
    const chars = beginWord.split('');
    for (let i = 0 ; i < beginWord.length; i++) {
        const char = chars[i];
        for (let j = 0; j < 26; j++) {
            const tempChar = String.fromCharCode(97 + j);
            if (tempChar === char) {
                continue;    
            }
            chars[i] = tempChar;
            const newString = chars.join('');
            if (dict.has(newString)) {
                result.push(newString);
            }
        }
        chars[i] = char;
    }
    return result;
}

var findLadders = function(beginWord, endWord, wordList) {
    const dict = new Set(wordList);
    let start = new Set();
    dict.delete(beginWord);
    start.add(beginWord);
    const map = new Map();
    const res = [];
    
    while (start.size > 0) {
        if (start.has(endWord)) {
            break;
        }
        const set = new Set();
        for (const w of start) {
            const po = generatePotentials(w, dict);
            if (po.length > 0) {
                map.set(w, po);
                for (const p of po) {
                    set.add(p);
                }
            }
        }
        for (const s of set) {
            dict.delete(s);
        }
        start = set;
    }

    dfs(beginWord, endWord, map, res, [beginWord]);
    return res;
};

function dfs (beginWord, endWord, map, res, temp) {
    if (beginWord === endWord) {
        res.push(temp.slice());
        return;
    }

    if (map.has(beginWord)) {
        for (const w of map.get(beginWord)) {
            temp.push(w);
            dfs(w, endWord, map, res, temp);
            temp.pop();
        }
    }
}