/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2] 
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0
*/
var findMin = function(nums) {
    if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  
  let left = 0;
  let right = nums.length - 1;
  
  if (nums[left] < nums[right]) return nums[left];

  while (left <= right) {
    const pivot = left + Math.floor((right - left) / 2); 
    if (nums[pivot - 1] > nums[pivot]) {
      return nums[pivot];
    }
    if (nums[pivot + 1] < nums[pivot]) {
      return nums[pivot + 1];
    }
    if (nums[left] < nums[pivot]) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }
};