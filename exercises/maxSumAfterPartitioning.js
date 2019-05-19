/*
Given an integer array A, you partition the array into (contiguous) subarrays of length at most K.  
After partitioning, each subarray has their values changed to become the maximum value of that subarray.

Return the largest sum of the given array after partitioning.

 

Example 1:

Input: A = [1,15,7,9,2,5,10], K = 3
Output: 84
Explanation: A becomes [15,15,15,9,10,10,10]
 

Note:

1 <= K <= A.length <= 500
0 <= A[i] <= 10^6
*/
const maxSumAfterPartitioning = (A, K) => {
    const n = A.length;
    const dp = new Array(n);
    for (let i=0; i<n; i++) {
        if (i === 0) dp[i] = A[i];
        else {
            let max = -Infinity;
            for (let j=1; j<=K; j++) {
                const prev = i>=j ? dp[i-j] : 0;
                max = Math.max(max, prev + sum(A, i-(j-1), i));
            }
            dp[i] = max;
        }
    }
    return dp[dp.length-1];
};

const sum = (A, from, to) => {
    from = Math.max(from, 0);
    to = Math.min(to, A.length-1);
    let max = -Infinity;
    for (let i=from; i<=to; i++) max = Math.max(max, A[i]);
    const result = max * (to-from+1);
    return result;
};