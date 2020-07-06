/*
Given an array which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays. Write an algorithm to minimize the largest sum among these m subarrays.

Note:
If n is the length of array, assume the following constraints are satisfied:

1 ≤ n ≤ 1000
1 ≤ m ≤ min(50, n)
Examples:

Input:
nums = [7,2,5,10,8]
m = 2

Output:
18

Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.
*/
var splitArray = function(nums, m) {
  const max = Math.max(...nums);
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  return binarySearch(nums, max, sum, m);
};

function binarySearch(nums, min, max, m) {
  let left = min;
  let right = max + 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canSplit(nums, mid, m)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function canSplit(nums, max, m) {
  let sum = 0;
  let n = 1;
  for (const num of nums) {
    if (sum + num > max) {
      sum = 0;
      n += 1;
      if (n > m) {
        return false;
      }
    }
    sum += num;
  }
  return true;
}