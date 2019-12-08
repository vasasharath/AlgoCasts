/*
Given a non-empty array containing only positive integers, find if the array can be partitioned 
into two subsets such that the sum of elements in both subsets is equal.

Note:

Each of the array element will not exceed 100.
The array size will not exceed 200.
 

Example 1:

Input: [1, 5, 11, 5]

Output: true

Explanation: The array can be partitioned as [1, 5, 5] and [11].
 

Example 2:

Input: [1, 2, 3, 5]

Output: false

Explanation: The array cannot be partitioned into equal sum subsets.
*/
var canPartition = function(nums) {
   let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    if(sum % 2 !== 0) return false;
    sum /= 2;
    let dp = new Array(sum + 1).fill(false);
    dp[0] = true;
    
    for(let num of nums) {
        for(let i = sum; i >= num; i--){
            dp[i] = dp[i] || dp[i - num];
        }
    }
    
    return dp[sum];
};