/*
Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

Example 1:

Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16 
Explanation: The two words can be "abcw", "xtfn".
Example 2:

Input: ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4 
Explanation: The two words can be "ab", "cd".
Example 3:

Input: ["a","aa","aaa","aaaa"]
Output: 0 
Explanation: No such pair of words.
*/
var maxProduct = function(words) {
    var max = 0;
    var holder = new Array(words.length).fill(0);

    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            holder[i] |= 1 << (words[i].charCodeAt(j) - 97);
        }
    }
    
    var len = words.length - 1;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j <= len; j++) {
            if ((holder[i] & holder[j]) === 0) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }
    
    return max;
};