/*
Given two strings s and t which consist of only lowercase letters.

String t is generated by random shuffling string s and then add one more letter at a random position.

Find the letter that was added in t.

Example:

Input:
s = "abcd"
t = "abcde"

Output:
e

Explanation:
'e' is the letter that was added.
*/
var findTheDifference = function(s, t) {
    const hashMap = {};
    for (var i = 0; i < s.length; i++) {
        if (!hashMap[s[i]]) {
            hashMap[s[i]] = 1;
        } else {
            hashMap[s[i]]++;
        }
    }
    for (var i = 0; i < t.length; i++){
        if (!hashMap[t[i]]) {
            return t[i];
        } else {
            hashMap[t[i]]--;
        }
    }
};