/*
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/
var permuteUnique = function(nums) {
    if (nums === null || nums.length === 0) return []
    var mark = [], result = [], p = []
    mark = new Array(nums.length)
    mark.fill(false)
    nums.sort()
    tb(nums, p, mark, result)
    
    return result
};

var tb = function(nums, p, mark, result) {
    if (p.length === nums.length) {
        result.push([...p])
        return
    }
    for (var i = 0; i < nums.length; i++) {
        if (mark[i] || (i > 0 && mark[i-1] && nums[i] == nums[i - 1])) continue
        p.push(nums[i])
        mark[i] = true
        tb(nums, p, mark, result)
        p.pop()
        mark[i] = false
    }
};