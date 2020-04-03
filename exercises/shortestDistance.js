/*
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3
Input: word1 = "makes", word2 = "coding"
Output: 1
Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
*/
var shortestDistance = function(words, word1, word2) {
    if (!words || words.length === 0 || !word1 || !word2) return false
    
    let res = words.length, a = -1, b = - 1
    words.forEach((word, index) => {
        if (word === word1) a = index
        if (word === word2) b = index
        if (a !== -1 && b !== -1) {
            res = Math.min(res, Math.abs(a - b))
        }
    })
    return res
};