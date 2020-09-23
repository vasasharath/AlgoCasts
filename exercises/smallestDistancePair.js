/*
Given an integer array, return the k-th smallest distance among all the pairs. The distance of a pair (A, B) is defined as the absolute difference between A and B.

Example 1:
Input:
nums = [1,3,1]
k = 1
Output: 0 
Explanation:
Here are all the pairs:
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
Then the 1st smallest distance pair is (1,1), and its distance is 0.
Note:
2 <= len(nums) <= 10000.
0 <= nums[i] < 1000000.
1 <= k <= len(nums) * (len(nums) - 1) / 2.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    nums.sort((a,b)=>a-b);
		
    let min=Infinity, max=nums[nums.length-1]-nums[0];
    for (var i = 0; i < nums.length-1; i++) {
    	min = Math.min(min, nums[i+1]-nums[i]);
    }
		
    function countLessThan(nums, target){
    	let right = 0, count=0;
    	for (var i = 0; i < nums.length; i++) {
    		while(nums[i]-nums[right]>target && right<=i) right++;
    		count+=(i-right);
    	}
    	return count;
    }
		
    while(min+1<max){
    	let mid = Math.floor((min+max)/2);
    	let count = countLessThan(nums, mid);
    	if(count>countLessThan(nums,mid-1)&&count===k) return mid;
    	if(count<k) min=mid;
    	else max=mid;
    }
    if(countLessThan(nums,min)>=k) return min;
    return max;
};
