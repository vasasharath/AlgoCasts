/*
Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.

Example:

Input: 2
Output: 91 
Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, 
             excluding 11,22,33,44,55,66,77,88,99
             */
var countNumbersWithUniqueDigits = function(n) {
    var c = [1, 10];
    var k = [0, 9];
    for (var i = 2; i <= Math.max(10, n); i++) {
    	k[i] = k[i - 1] * (9 - i + 2);
    	c[i] = k[i] + c[i - 1];
    }

    return n <= 10 ? c[n] : c[10];
};             