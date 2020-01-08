/*
Given an integer array, your task is to find all the different possible increasing subsequences of the given array, 
and the length of an increasing subsequence should be at least 2.

 

Example:

Input: [4, 6, 7, 7]
Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
 

Note:

The length of the given array will not exceed 15.
The range of integer in the given array is [-100,100].
The given array may contain duplicates, and two equal integers should also be considered as a special case of increasing sequence.
*/
var findSubsequences = function(nums) {
    function backtrack(index, subseq) {   
        let last = subseq.length == 0 ? -Infinity : subseq.slice(-1)[0];
        let s = [];
        if (subseq.length > 1) {
            s.push(subseq);
        }
        let usedNumbers = new Set();
        for (let i = index; i < nums.length; i++) {
            if (usedNumbers.has(nums[i]) || nums[i] < last) {
                continue;
            }
            usedNumbers.add(nums[i]);
            s = s.concat(backtrack(i + 1, subseq.concat([nums[i]])));
        }
        return s;
    }
    return backtrack(0, []);
};