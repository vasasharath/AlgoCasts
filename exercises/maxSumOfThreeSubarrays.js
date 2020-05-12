/*
In a given array nums of positive integers, find three non-overlapping subarrays with maximum sum.

Each subarray will be of size k, and we want to maximize the sum of all 3*k entries.

Return the result as a list of indices representing the starting position of each interval (0-indexed). If there are multiple answers, return the lexicographically smallest one.

Example:

Input: [1,2,1,2,6,7,5,1], 2
Output: [0, 3, 5]
Explanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.
 

Note:

nums.length will be between 1 and 20000.
nums[i] will be between 1 and 65535.
k will be between 1 and floor(nums.length / 3).
*/
var maxSumOfThreeSubarrays = function(nums, k) {
  let n = nums.length;
        let sum = Array(n + 1).fill(0);
        let left = Array(n).fill(0);
        let right = Array(n).fill(0);
        let ret = [];
        
        // First get the prefix sum of nums.
        // Prefix sum enables us to get the sum of k consecutive element in O(1) time
        for (let i = 0; i < n; i++) {
            sum[i + 1] = sum[i] + nums[i];
        }
        
        // DP for the left intetval max sum
        for (let i = k, tot = sum[k] - sum[0]; i < n; i++) {
            if (sum[i + 1] - sum[i - k + 1] > tot) {
                tot = sum[i + 1] - sum[i - k + 1];
                left[i] = i - k + 1;
            } else {
                left[i] = left[i - 1];
            }
        }
        
        // DP for the right interval max sum
        right[n - k] = n - k;
        for (let i = n - 1 - k, tot = sum[n] - sum[n - k]; i >= 0; i--) {
            if (sum[i + k] - sum[i] >= tot) {
                tot = sum[i + k] - sum[i];
                right[i] = i;
            } else {
                right[i] = right[i + 1];
            }
        }
        
        // Find the max sum by iterating through the middle interval index based on above 2 cache.
        let maxSum = 0;
        for (let i = k; i <= n - 2 * k; i++) {
            let l = left[i - 1];
            let r = right[i + k];
            let tot = sum[l + k] - sum[l] + sum[r + k] - sum[r] + sum[i + k] - sum[i];
            //console.log(tot);
            if (tot > maxSum) {
                ret[0] = l;
                ret[1] = i;
                ret[2] = r;
                maxSum = tot;
            }
        }
        
        return ret; 
};