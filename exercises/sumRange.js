/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

The update(i, val) function modifies nums by updating the element at index i to val.

Example:

Given nums = [1, 3, 5]

sumRange(0, 2) -> 9
update(1, 2)
sumRange(0, 2) -> 8
Note:

The array is only modifiable by the update function.
You may assume the number of calls to update and sumRange function is distributed evenly.
*/
class NumArray {
  constructor(nums) {
    const BIT = Array(nums.length + 1).fill(0)
    const vals = Array(nums.length).fill(0)

    this.update = (i, val) => {
      const delta = val - vals[i]
      vals[i] = val
      for (i += 1; i <= nums.length; i += -i & i) BIT[i] += delta
    }

    const prefixSum = i => {
      let sum = 0
      for (i += 1; i > 0; i -= -i & i) sum += BIT[i]
      return sum
    }

    this.sumRange = (i, j) => prefixSum(j) - prefixSum(i - 1)

    nums.forEach((n, i) => this.update(i, n))
  }
}