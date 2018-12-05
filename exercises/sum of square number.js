/*
Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

Example 1:
Input: 5
Output: True
Explanation: 1 * 1 + 2 * 2 = 5
Example 2:
Input: 3
Output: False
*/

var judgeSquareSum = function(c) {
    if (c == 0) return true;
	for (var a = 0; a * a < c; a++) {
		if ((Math.sqrt(c - (a * a))) % 1 === 0) break
	}
	return a * a < c;
};