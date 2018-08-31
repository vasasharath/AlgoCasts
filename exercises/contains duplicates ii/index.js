/*
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/

var containsNearbyDuplicate = function (nums, k) {
	const hashTab = {};
	for (var i = 0, l = nums.length; i < l; i++) {
		if (hashTab[nums[i]] !== undefined && (i - hashTab[nums[i]]) <= k && (i - hashTab[nums[i]]) !== 0) {
			return true;
		}
		hashTab[nums[i]] = i;
	}
	return false;
};