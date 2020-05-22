/*
Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by array nums. You are asked to burst all the balloons. If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins. Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.

Find the maximum coins you can collect by bursting the balloons wisely.

Note:

You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
Example:

Input: [3,1,5,8]
Output: 167 
Explanation: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
             coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
*/             
var maxCoins = function(arr) {
  const nums = [];
  let n = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      nums[n++] = arr[i];
    }
  }
  nums[0] = nums[n++] = 1;

  let cache = [];
  for (let i = 0; i < n; i++) {
    cache[i] = [];
    for (let j = 0; j < n; j++) {
      cache[i][j] = 0;
    }
  }

  for (let k = 2; k < n; k++) {
    for (let left = 0; left < n - k; left++) {
      let right = left + k;
      for (let i = left + 1; i < right; i++) {
        let result = nums[left] * nums[i] * nums[right] + cache[left][i] + cache[i][right];
        cache[left][right] = Math.max(cache[left][right], result);
      }
    }
  }

  return cache[0][n - 1];
}