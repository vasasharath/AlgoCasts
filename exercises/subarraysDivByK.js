/*
Given an array A of integers, return the number of (contiguous, non-empty) subarrays that have a sum divisible by K.

 

Example 1:

Input: A = [4,5,0,-2,-3,1], K = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by K = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
 

Note:

1 <= A.length <= 30000
-10000 <= A[i] <= 10000
2 <= K <= 10000
*/
var subarraysDivByK = function(A, K) {
    let sums = new Array(A.length + 1).fill(0);
    let res = 0;
    for(let i = 1; i <= A.length; i++) {
        sums[i] = sums[i - 1] + A[i - 1];
    }
   
    let dp = new Array(K).fill(0);
    dp[0] = 1;
    for(let i = 1; i < sums.length; i++) {
        let mod = (sums[i] % K + K) % K;
        
        res = res + dp[mod];
        dp[mod] = dp[mod] + 1;
    }
   
    return res;
}