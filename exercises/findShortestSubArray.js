/*
Given a non-empty array of non-negative integers nums, 
the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

Example 1:
Input: [1, 2, 2, 3, 1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:
Input: [1,2,2,3,1,4,2]
Output: 6
Note:

nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.
*/
var findShortestSubArray = function(nums) {
     if (nums.length == 0 || !nums) {
        return 0;
    }
    let m = {};
    let maxTimes = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let item = m[num];
        if (item) {
            item.right = i;
            item.times++;
            maxTimes = Math.max(item.times, maxTimes);
        } else {
            m[num] = {
                times: 1,
                left: i,
                right: i
            }
            maxTimes = Math.max(1, maxTimes);
        }
    }
    let min = 2147483647;
    for (let i in m) {
        let item = m[i];
        if (item.times == maxTimes) {
            if (item.left == item.right) {
                min = Math.min(1, min);
            } else {
                min = Math.min(item.right - item.left + 1, min);
            }
        }
    }
    return min;
};