/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

The array may contain duplicates.

Example 1:

Input: [1,3,5]
Output: 1
Example 2:

Input: [2,2,2,0,1]
Output: 0
Note:

This is a follow up problem to Find Minimum in Rotated Sorted Array.
Would allow duplicates affect the run-time complexity? How and why?
*/
var findMin = function(nums) {
     let left = 0, right = nums.length-1;
    while(left+1<right){
    	let mid = Math.floor((left+right)/2);
    	//To deal with nums like: [1,4,4,1]
    	if(nums[mid]>nums[right]) left = mid; 
    	//To deal with nums like: [4,0,1,4]
    	if(nums[mid]<nums[right]) right = mid;
    	if(nums[mid]===nums[right]){
            //To deal with nums like: [4,4,4,1,4]
            //To deal with nums like: [4,1,4,4,4]
            //To deal with nums like: [4,4,4,4,4]
    		while(left+1<right && nums[mid]===nums[left]) left++;
    		//To deal with nums like: [1,4,4]
    		if(nums[mid]>nums[left]) return nums[left];
            //To deal with nums like: [4,0,1,1,1]
            if(nums[mid]<nums[left]) right = mid;
    	}
    }
    if(left===right) return nums[left];
    return nums[left]>nums[right]?nums[right]:nums[left];
};