/*
Given an array nums, we call (i, j) an important reverse pair if i < j and nums[i] > 2*nums[j].

You need to return the number of important reverse pairs in the given array.

Example1:

Input: [1,3,2,3,1]
Output: 2
Example2:

Input: [2,4,3,5,1]
Output: 3
Note:
The length of the given array will not exceed 50,000.
All the numbers in the input array are in the range of 32-bit integer.
*/
var reversePairs = function(nums) {
  const n = nums.length
  const BIT = Array(n + 1).fill(0) // Binary Indexd Tree (BIT)
  const sorted = [...nums].sort((a, b) => a - b)
  
  // Increment at i in our BIT
  const increment = i => { for (i++; i > 0; i -= -i & i) BIT[i]++ }
  
  // Prefix sum at i in our BIT
  const query = i => {
    let sum = 0
    for (i++; i <= n; i += -i & i) sum += BIT[i]
    return sum
  }
  
  // Binary search to find index of elements less than val
  const index = val => {
    let left = 0
    let right = sorted.length - 1
    
    while (left <= right) {
      const mid = (left + right) >> 1
      if (sorted[mid] >= val) right = mid - 1
      else left = mid + 1
    }
    
    return left
  }
  
  let count = 0
  
  for (const num of nums) {
    count += query(index(2 * num + 1))
    increment(index(num))
  }
  
  return count
};