/*
Given a string S, find the number of different non-empty palindromic subsequences in S, and return that number modulo 10^9 + 7.

A subsequence of a string S is obtained by deleting 0 or more characters from S.

A sequence is palindromic if it is equal to the sequence reversed.

Two sequences A_1, A_2, ... and B_1, B_2, ... are different if there is some i for which A_i != B_i.

Example 1:
Input: 
S = 'bccb'
Output: 6
Explanation: 
The 6 different non-empty palindromic subsequences are 'b', 'c', 'bb', 'cc', 'bcb', 'bccb'.
Note that 'bcb' is counted only once, even though it occurs twice.
Example 2:
Input: 
S = 'abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'
Output: 104860361
Explanation: 
There are 3104860382 different non-empty palindromic subsequences, which is 104860361 modulo 10^9 + 7.
Note:

The length of S will be in the range [1, 1000].
Each character S[i] will be in the set {'a', 'b', 'c', 'd'}.
*/
var countPalindromicSubsequences = function(S) {
  const N = S.length;
  
  const A = [];
  for (const c of S) {
    A.push(c.charCodeAt(0) - 'a'.charCodeAt(0));
  }
  
  const prv = new Array(N).fill(null);
  const nxt = new Array(N).fill(null);
  let last = new Array(4).fill(-1);
  for (let i = 0; i < N; i++) {
    last[A[i]] = i;
    prv[i] = last.slice();
  }
  last = new Array(4).fill(-1);
  for (let i = N - 1; i >= 0; i--) {
    last[A[i]] = i;
    nxt[i] = last.slice();
  }

  const MOD = 10**9 + 7;
  const memo = new Array(N).fill(0).map(_ => new Array(N).fill(null));
  const dp = (i, j) => {
    if (memo[i][j] !== null) {
      return memo[i][j];
    }
    let ans = 1;
    if (i <= j) {
      for (let x = 0; x < 4; x++) {
        let i0 = nxt[i][x];
        let j0 = prv[j][x];
        if (i0 !== -1 && i <= i0 && i0 <= j) {
          ans += 1;
        }
        if (i0 !== -1 && j0 !== -1 && i0 < j0) {
          ans += dp(i0 + 1, j0 - 1);
        }
      }
    }
    ans %= MOD;
    memo[i][j] = ans;
    return ans;
  }
  return dp(0, N-1) - 1;
};