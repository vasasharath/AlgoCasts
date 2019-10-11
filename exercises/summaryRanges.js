/*
Given a sorted integer array without duplicates, return the summary of its ranges.

Example 1:

Input:  [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
Example 2:

Input:  [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.
*/
var summaryRanges = function(nums) {
     var result = [];
    var index = 0;
    while (index < nums.length) {
        var range = [nums[index], nums[index++]];
        while (nums[index] === range[1] + 1) range[1] = nums[index++];
        result.push(range[0] === range[1] ? '' + range[0] : range[0] + '->' + range[1]);
    }
    return result;
};