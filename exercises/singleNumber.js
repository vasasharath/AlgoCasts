/*
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. 
Find the two elements that appear only once.

Example:

Input:  [1,2,1,3,2,5]
Output: [3,5]
Note:

The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
*/
var singleNumber = function(nums) {
     var s = nums.reduce((n1, n2) => n1 ^ n2);
    var offset = 0;
    while (true) {
    	if (s & 1 == 1) {
    		break;
    	}

    	offset++;
    	s >>= 1;
    }

    var a = 0, b = 0;
    nums.forEach(num => {
    	if ((num >> offset) & 1 == 1) {
    		a ^= num;
    	} else {
    		b ^= num;
    	}
    });

    return [a, b];
};