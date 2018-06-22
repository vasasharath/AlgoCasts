/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function first(nums, low, high, x, n)
    {
      
        if(high >= low)
        {
            //find the mid element at every iteration
            let mid = Math.floor(low + (high - low)/2);
            if( ( mid == 0 || x > nums[mid-1]) && nums[mid] == x)
                return mid;
             else if(x > nums[mid])
                return first(nums, (mid + 1), high, x, n);
            else
                return first(nums, low, (mid -1), x, n);
        }
    return -1;
    }

    function last(nums, low, high, x, n)
    {
        if (high >= low)
        {
            let mid = Math.floor(low + (high - low)/2);
            if (( mid == n-1 || x < nums[mid+1]) && nums[mid] == x)
                 return mid;
            else if (x < nums[mid])
                return last(nums, low, (mid -1), x, n);
            else
                return last(nums, (mid + 1), high, x, n);
        }
    return -1;
    }
    return [first(nums,0,nums.length - 1,target,nums.length),last(nums,0,nums.length - 1,target,nums.length)];
};