/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

You are given a target value to search. If found in the array return true, otherwise return false.

Example 1:

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
Follow up:

This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
Would this affect the run-time complexity? How and why?
*/
var search = function(nums, target) {
    if (nums.length === 0) return false;
function searchSub(lp, rp) {
let mid = Math.floor((lp + rp) / 2);
if (nums[lp] === target || nums[rp] === target) return true;
if (lp === mid) return false;
return searchSub(lp, mid) || searchSub(mid, rp);
}
return searchSub(0, nums.length - 1);
};