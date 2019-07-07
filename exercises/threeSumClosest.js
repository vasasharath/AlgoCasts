/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. 
Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/
var threeSumClosest = function(nums, target) {
  var MAX_VALUE = 2147483647;
  
  if (nums.length < 3) return 0;
  nums.sort(function(a, b) { return a-b; }); 
  
  var i,
    len = nums.length,
    minDiff = MAX_VALUE,
    complement,
    p1,
    p2,
    curSum,
    result;
  
  for (i = 0; i < len - 2; i++) {
    complement = target - nums[i];
    p1 = i + 1;
    p2 = len - 1;
    while (p1 < p2) {
      curSum = nums[p1] + nums[p2];
      if (minDiff > Math.abs(curSum - complement)) {
        minDiff = Math.abs(curSum - complement);
        result = curSum + nums[i];
      }
      if (minDiff === 0) break;
      if (curSum > complement) {
        p2--;
      } else if (curSum < complement) {
        p1++;
      }
    }
    while (nums[i+1] === nums[i]) {
      i++;
    }
  }
  return result;
};