/*
Given a sorted integer array nums, where the range of elements are in the inclusive range [lower, upper], return its missing ranges.

Example:

Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
Output: ["2", "4->49", "51->74", "76->99"]
*/
var findMissingRanges = function(nums, lower, upper) {
     function addRange (ans, start, end) {
    if(start > end) {
        return;
    }
    
    if(start === end) {
        ans.push(`${start}`);
        return;
    }
    
    ans.push(start + "->" + end);
}
    
    let ans = [];
    
    if(!nums || !nums.length) {
        addRange(ans,lower,upper);
        return ans;
    }
    
    addRange(ans, lower, nums[0] -1);
    for(let i = 1; i < nums.length; i++) {
        addRange(ans, nums[i-1] + 1, nums[i] -1);
    }
    
    addRange(ans, nums[nums.length-1]+1, upper);
    return ans;
};