/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/
var thirdMax = function(nums) {
    let max = Array(3).fill(-Infinity);
    
    for(let i = 0; i < nums.length; i += 1) {
        if (max.includes(nums[i])) continue;
        max[2] = Math.max(max[2], Math.min(max[1], nums[i]));
        max[1] = Math.max(max[1], Math.min(max[0], nums[i]));
        max[0] = Math.max(max[0], nums[i]);
    }
    
    return max[2] === -Infinity ? max[0] : max[2];
};