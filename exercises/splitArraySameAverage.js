/*
In a given integer array A, we must move every element of A to either list B or list C. (B and C initially start empty.)

Return true if and only if after such a move, it is possible that the average value of B is equal to the average value of C, and B and C are both non-empty.

Example :
Input: 
[1,2,3,4,5,6,7,8]
Output: true
Explanation: We can split the array into [1,4,5,8] and [2,3,6,7], and both of them have the average of 4.5.
Note:

The length of A will be in the range [1, 30].
*/
function splitArraySameAverage(A) {
  const sum = A.reduce((a, b) => a + b);
  const N = A.length;
  const dp = {};

  A.sort((a, b) => b - a);
  for (let i = 1; i < A.length; i++) {
    if (sum*i%N === 0 && dfs(0, sum*i/N, i)) {
      return true;
    }
  }
  return false;

  function dfs(start, target, k) {
    if (target === 0 && k === 0) return true;
    if (target < 0 || k === 0) return false;
    if (target > k*A[start]) return false;

    const hash = [start, target, k].join(',');
    if (dp[hash] !== undefined) {
      return dp[hash];
    }

    for (let i = start; i < N; i++) {
      if (dfs(i+1, target-A[i], k-1)) {
        return true;
      }
    }
    dp[hash] = false;
    return false;
  }
}