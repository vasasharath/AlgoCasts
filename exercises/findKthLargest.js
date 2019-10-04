/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, 
not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/
const findKthLargest = (nums, k) => {
    shuffle(nums)
    return helper(nums, k)
};

const shuffle = (nums) => {
    let n = nums.length
    while (n) {
        const i = Math.floor(Math.random() * n--)
        ;[nums[i], nums[n]] = [nums[n], nums[i]]
    }
};

const helper = (nums, k, low = 0, high = nums.length - 1) => {
    let p = high, i = 0
    while (i < p) {
        if (nums[i] < nums[p]) {
            if (i === p - 1) {
                ;[nums[i], nums[p]] = [nums[p], nums[i]]
                i++
            } else {
                ;[nums[p - 1], nums[p]] = [nums[p], nums[p - 1]]
                ;[nums[i], nums[p]] = [nums[p], nums[i]]
            }
            p--
        } else {
            i++
        }
    }
    if (p < k - 1) return helper(nums, k, p + 1, high)
    if (p > k - 1) return helper(nums, k, low, p - 1)
    return nums[p]
};