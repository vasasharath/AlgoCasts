/*
Given an integer array with all positive numbers and no duplicates, 
find the number of possible combinations that add up to a positive integer target.

Example:

nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.
 

Follow up:
What if negative numbers are allowed in the given array?
How does it change the problem?
What limitation we need to add to the question to allow negative numbers?
*/
var combinationSum4 = function(nums, target) {
    var f = [1];
    for (var i = 1; i <= target; i++) {
    	f[i] = 0;
    	for (var num of nums) {
    		if (i - num >= 0) {
    			f[i] += f[i - num];
    		}
    	}
    }

    return f[target];
};