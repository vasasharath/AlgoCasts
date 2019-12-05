/*
Given an array of integers with possible duplicates, randomly output the index of a given target number. 
You can assume that the given target number must exist in the array.

Note:
The array size can be very large. Solution that uses too much extra space will not pass the judge.

Example:

int[] nums = new int[] {1,2,3,3,3};
Solution solution = new Solution(nums);

// pick(3) should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.
solution.pick(3);

// pick(1) should return 0. Since in the array only nums[0] is equal to 1.
solution.pick(1);
*/
var Solution = function(nums) {
    this.nums = nums;
    this.len = nums.length;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    if (this.len == 1) return 0;
    var result = 0;
    var count = 0;
    for (var i = 0; i < this.len; i++) {
        if (this.nums[i] == target) {
            if (Math.floor(Math.random() * (++count)) == 0) result = i;
        }
    }
    return result;
};