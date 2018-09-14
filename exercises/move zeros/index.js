/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/
var moveZeroes = function(nums) {
     var index = 0;
    for(var i = 0 ; i < nums.length ; i++){
        var n = nums[i]; 
        // not zero, index++, push to array
        if(n !== 0){
            nums[index++] = n;    
        }
    }

    // after index to zero
    for(index ; index < nums.length ; index++){
        nums[index] = 0;
    }
};
