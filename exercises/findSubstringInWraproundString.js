/*
Consider the string s to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so s will look like this: "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".

Now we have another string p. Your job is to find out how many unique non-empty substrings of p are present in s. In particular, your input is the string p and you need to output the number of different non-empty substrings of p in the string s.

Note: p consists of only lowercase English letters and the size of p might be over 10000.

Example 1:
Input: "a"
Output: 1

Explanation: Only the substring "a" of string "a" is in the string s.
Example 2:
Input: "cac"
Output: 2
Explanation: There are two substrings "a", "c" of string "cac" in the string s.
Example 3:
Input: "zab"
Output: 6
Explanation: There are six substrings "z", "a", "b", "za", "ab", "zab" of string "zab" in the string s.
*/
var findSubstringInWraproundString = function(p) {
     if (p.length === 0) return 0;
    const dp = new Array(26).fill(0);
    dp[p[0].charCodeAt() - 97] = 1;
    
	let currentMax = 1;
    for (let i = 1; i < p.length; i++) {
        let prevCharIdx = p[i - 1].charCodeAt() - 97;
        let charIdx = p[i].charCodeAt() - 97;
        if (charIdx - prevCharIdx === 1 || charIdx - prevCharIdx === -25) {
            currentMax++;
        } else {
            currentMax = 1;
        }
        dp[charIdx] = Math.max(dp[charIdx], currentMax)
    }
    
    return dp.reduce((acc, val) => acc + val);
};