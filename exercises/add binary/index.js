/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
*/

var addBinary = function (a, b) {
	var c = 0;
	var alen = a.length;
	var blen = b.length;
	var ans = '';
	for (var i = 0; i < Math.max(alen, blen); i++) {
		var ai = i < alen ? parseInt(a[alen - i - 1]) : 0;
		var bi = i < blen ? parseInt(b[blen - i - 1]) : 0;

		var sum = ai + bi + c;
		if (sum < 2) {
			ans = sum + ans;
			c = 0;
		} else {
			ans = (sum - 2) + ans;
			c = 1;
		}
	}
	if (c) {
		ans = 1 + ans;
	}

	return ans;

};