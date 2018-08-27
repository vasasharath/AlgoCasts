/*
Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

*/

var countPrimes = function (n) {
	var count = 0;
	var arr = new Array(n);
	for (var i = 2; i < n; ++i) {
		if (arr[i]) {
			continue;
		}
		count++;
		for (var j = i; j < n; j = j + i)
			arr[j] = true;
	}
	return count;
};