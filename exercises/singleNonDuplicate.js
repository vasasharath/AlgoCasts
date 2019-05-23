/*
Given a sorted array consisting of only integers where every element appears exactly twice 
except for one element which appears exactly once. Find this single element that appears only once.

 

Example 1:

Input: [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: [3,3,7,7,10,11,11]
Output: 10
*/
var singleNonDuplicate = function(nums) {
  var start = 0;
    var end = nums.length - 1;
    
    while(end > start) {
        var mid = Math.floor((start+end)/2);
        
        if(nums[mid] != nums[mid-1] && nums[mid] != nums[mid+1]) return nums[mid];
        
        if(mid % 2 == 0) {
            if(mid == nums.length-1) return nums[mid];

            if(nums[mid] == nums[mid+1]) {
                start = mid+1;
                continue;
            }
            
            if(mid == 0) return nums[mid];
            
            if(nums[mid] == nums[mid-1]) {
                end = mid-1;
            }
        } else {
            if(mid == nums.length-1) return nums[mid];

            if(nums[mid] == nums[mid+1]) {
                end = mid-1;
                continue;
            }
            
            if(mid == 0) return nums[mid];
            
            if(nums[mid] == nums[mid-1]) {
               start = mid+1;
            }
        }
    }
    
    return nums[start];  
};