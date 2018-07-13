/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/
var reverse = function(x) {
    let result = 0,n = Math.abs(x);
    while (n != 0) {
    result = (result * 10) + (n % 10);
    n = Math.floor(n / 10);
    }
    if ((result > (Math.pow(2,31) - 1)) || (result < (-1 * Math.pow(2,31)))){
         return 0;
         }
    else
         return x >= 0? result : (-1 * result);
};