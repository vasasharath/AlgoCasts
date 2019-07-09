/*
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/
function sortNumber(a, b) {
    return a - b
}

var fourSum = function(nums, target) {
    nums.sort(sortNumber)

    let arr = []
    let Max3 =  nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3]
    let Max2 =  nums[nums.length - 1] + nums[nums.length - 2]

    for (var i = 0; i < nums.length - 3; i++) {
        while (i > 0 && nums[i] == nums[i - 1] || nums[i] + Max3 < target) i++
        if (4 * nums[i] > target) break
        let sum3 = target - nums[i]
        for (var j = i + 1; j < nums.length - 2; j++) {
            while (j > i + 1 && nums[j] == nums[j - 1] || nums[j] + Max2 < sum3) j++
            if (3 * nums[i] > sum3) break
            let l = j + 1
            let r = nums.length - 1
            let sum2 = sum3 - nums[j]
            while (l < r) {
                if (nums[l] + nums[r] == sum2) {
                    arr.push([nums[i], nums[j], nums[l], nums[r]])
                    l++
                    r--
                    while (nums[l] == nums[l - 1] && l < r) l++
                    while (nums[r] == nums[r + 1] && l < r) r--
                }else if (nums[l] + nums[r] > sum2) {
                    r--
                    while (nums[r] == nums[r + 1] && l < r) r--
                }else {
                    l++
                    while (nums[l] == nums[l - 1] && l < r) l++
                }
            }
        }
    }
    return arr
};