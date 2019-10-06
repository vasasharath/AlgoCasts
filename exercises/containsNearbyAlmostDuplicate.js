/*
Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3, t = 0
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1, t = 2
Output: true
Example 3:

Input: nums = [1,5,9,1,5,9], k = 2, t = 3
Output: false
*/
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if (k > 2 * t) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
      for (let j = nums[i] - t; j <= nums[i] + t; j++) {
        if (map.has(j) && i - map.get(j) <= k) {
          return true
        }
      }
      map.set(nums[i], i)
    }
    return false
  } else {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i - k < 0 ? 0 : i - k; j < i; j++) {
        if (Math.abs(nums[j] - nums[i]) <= t) return true
      }
    }
    return false
  }
};