/*
Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

Example:

Input: nums = [-2,0,1,3], and target = 2
Output: 2 
Explanation: Because there are two triplets which sums are less than 2:
             [-2,0,1]
             [-2,0,3]
Follow up: Could you solve it in O(n2) runtime?
*/
var threeSumSmaller = function(nums, target) {
    var count = 0, i, lo, hi, len=nums.length;
    
    if(len<3) return count;

    nums.sort(function(a,b){return a-b;});

    for(i=1;i<len-1;i++){
        lo = 0;
        hi = len-1;
        
        while(lo < i && i < hi){
            if(nums[lo]+nums[i]+nums[hi]>=target){
                hi--;
            } else {
                count += hi-i;
                lo++;
            }
        }
    }
    
    return count;
};