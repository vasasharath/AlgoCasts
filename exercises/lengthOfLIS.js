/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
*/
var lengthOfLIS = function(nums) {
      const binarySearchPosition = (dp, target, hi) => {
        let lo = 0;
        while (lo <= hi) {
            let mid = Math.floor((lo+hi)/2);
            if (target === dp[mid]) return mid;
            else if (target < dp[mid]) hi = mid-1;
            else lo = mid+1;
        }
        return lo;
    }
    
    if (nums === null || nums.length===0) return 0;
    if (nums.length === 1) return 1;
    let dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
    for (let i=0; i<nums.length; i++){
        let pos = binarySearchPosition(dp, nums[i], i);
        dp[pos] = nums[i];
    }

    for (let i = dp.length-1; i >= 0; i--){
        if (dp[i] !== Number.MAX_SAFE_INTEGER) return i+1;
    }
    
    return 0;
};