/*
Given an integer n, return the number of trailing zeroes in n!.

Example 1:

Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.
Example 2:

Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.
Note: Your solution should be in logarithmic time complexity.
*/

var trailingZeroes = function(n) {
    if (n === 0) return 0;
    var res = 0;
    while (n !== 0) {
        n = parseInt(n / 5);
        res += n;
    }
    return res;
};