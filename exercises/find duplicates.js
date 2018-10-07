/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/
var findDuplicates = function(nums) {
    const duplicates = [];
    
    /*
     * mark visited number with "-" in index & record duplicates 
     * by telling if a number is already visited.
     */
   for(let i = 0; i < nums.length; i++)
    {
        if(nums[Math.abs(nums[i])-1] > 0)
            nums[Math.abs(nums[i])-1] = -nums[Math.abs(nums[i])-1];
        else
            duplicates.push(Math.abs(nums[i]));
    }
    return duplicates;
};