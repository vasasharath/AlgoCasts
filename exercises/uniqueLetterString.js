/*
Let's define a function countUniqueChars(s) that returns the number of unique characters on s, for example if s = "LEETCODE" then "L", "T","C","O","D" are the unique characters since they appear only once in s, therefore countUniqueChars(s) = 5.

On this problem given a string s we need to return the sum of countUniqueChars(t) where t is a substring of s. Notice that some substrings can be repeated so on this case you have to count the repeated ones too.

Since the answer can be very large, return the answer modulo 10 ^ 9 + 7.

 

Example 1:

Input: s = "ABC"
Output: 10
Explanation: All possible substrings are: "A","B","C","AB","BC" and "ABC".
Evey substring is composed with only unique letters.
Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10
Example 2:

Input: s = "ABA"
Output: 8
Explanation: The same as example 1, except countUniqueChars("ABA") = 1.
Example 3:

Input: s = "LEETCODE"
Output: 92
 

Constraints:

0 <= s.length <= 10^4
s contain upper-case English letters only.
*/
var uniqueLetterString = function(S) {
    let contribute = new Array(26).fill(0);
    let lastPos = new Array(26).fill(0);
    let res = 0;
    let cur = 0;
    for(let i = 0; i < S.length; i++) {
        let charIdx = S[i].charCodeAt(0) - 65;
        cur = cur - contribute[charIdx];
        contribute[charIdx] = i - (lastPos[charIdx] - 1);
        cur = cur + contribute[charIdx];
        lastPos[charIdx] = i + 1;
        res = res + cur;
    }
    return res;
};