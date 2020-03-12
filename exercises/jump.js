/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
Note:

You can assume that you can always reach the last index.
*/
var jump = function(nums) {
    var max = 0;
    var nextMax = 0;
    var jumps = 0;

    nums.some((v, i) => {
        if (max >= nums.length - 1) {
            return true;
        }

        nextMax = Math.max(i + v, nextMax);
        
        if (i === max) {
            max = nextMax;
            jumps++;
        }
    });
    
    return jumps;
};