/*
Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:

Input: [10,2]
Output: "210"
Example 2:

Input: [3,30,34,5,9]
Output: "9534330"
Note: The result may be very large, so you need to return a string instead of an integer.
*/
var largestNumber = function(nums) {
    let rst = "";
    nums.sort(comparator);
    for (const num of nums) {
        rst += num;
    }
    return rst == 0 ? '0' : rst;
};

var comparator = function(a, b) {
    const s1 = "" + a + b,
        s2 = "" + b + a;
    return s2 - s1;
};