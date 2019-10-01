/*
Given an array of n positive integers and a positive integer s, 
find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example: 

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n). 
*/
var minSubArrayLen = function(s, nums) {
    let begin = 0, end = 0, sum = nums[0], min = Infinity
    while(begin < nums.length && end < nums.length) {
        if(sum >= s) {
            if(min > end - begin + 1) {
                min = end - begin + 1
            }
            sum -= nums[begin]
            begin++
        } else {
            end++
            sum += nums[end]
        }
    }
    return min == Infinity ? 0 : min
};