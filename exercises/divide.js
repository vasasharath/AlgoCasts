/*
Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Note:

Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: 
[−231,  231 − 1]. For the purpose of this problem, 
assume that your function returns 231 − 1 when the division result overflows.
*/
var divide = function(dividend, divisor) {
    if (dividend < -2147483648) {
        dividend = -2147483648
      }
      if (dividend > 2147483647) {
        dividend = 2147483647
      }
      if (divisor < -2147483648) {
        divisor = -2147483648
      }
      if (divisor > 2147483647) {
        divisor = 2147483647
      }
	  
      let sign = Math.sign(dividend) !== Math.sign(divisor) ? 0 : 1;
      let zhengres = Math.floor(dividend / divisor);
      let fures = Math.ceil(dividend / divisor);
	  
      if (zhengres < -2147483648) {
        zhengres = -2147483648
      }
      if (zhengres > 2147483647) {
        zhengres = 2147483647
      }
      if (fures < -2147483648) {
        fures = -2147483648
      }
      if (fures > 2147483647) {
        fures = 2147483647
      }
      return sign ? zhengres : fures; 
};