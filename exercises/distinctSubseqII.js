/*
Given a string S, count the number of distinct, non-empty subsequences of S .

Since the result may be large, return the answer modulo 10^9 + 7.

 

Example 1:

Input: "abc"
Output: 7
Explanation: The 7 distinct subsequences are "a", "b", "c", "ab", "ac", "bc", and "abc".
Example 2:

Input: "aba"
Output: 6
Explanation: The 6 distinct subsequences are "a", "b", "ab", "ba", "aa" and "aba".
Example 3:

Input: "aaa"
Output: 3
Explanation: The 3 distinct subsequences are "a", "aa" and "aaa".
 

 

Note:

S contains only lowercase letters.
1 <= S.length <= 2000
*/
var distinctSubseqII = function(S) {
    const indexs = {};
    const cache = [1];
    const mod = 1000000007
    for (let i = 0; i < S.length; i++) {
	    const char = S[i];
		let value = (cache[cache.length - 1] * 2) % mod;
		if (cache[indexs[char]]) value = (value + mod - cache[indexs[char]]) % mod;
		cache.push(value);
        indexs[S[i]] = i;
    }
    return cache[cache.length - 1] - 1;
};