/*
Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.

Example 1:
Input:

"bbbab"
Output:
4
One possible longest palindromic subsequence is "bbbb".
Example 2:
Input:

"cbbd"
Output:
2
One possible longest palindromic subsequence is "bb".
*/
var longestPalindromeSubseq = function(str) {
    if(str.length === 0 || str === null) return 0
  const len = str.length,
        dp = Array(len).fill(null).map(()=>Array(len).fill(0))
  return helper(0,len-1)
  
  function helper(s,e){
    if(s>e) return dp[s][e] = 0
    if(dp[s][e] != 0) return dp[s][e]
    if(s==e) return dp[s][e] = 1
    if(str.charAt(s) === str.charAt(e)) return dp[s][e] = helper(s+1,e-1)+2
    else return dp[s][e] = Math.max(helper(s+1,e), helper(s,e-1))
  }
};