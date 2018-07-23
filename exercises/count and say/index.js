/*
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211"

*/
var countAndSay = function (n) {
	if (n == 1)
		return "1";
	if (n == 2)
		return "11";

	// Find n'th term by generating all terms from 3 to
	// n-1.  Every term is generated using previous term
	let str = "11"; // Initialize previous term
	for (let i = 3; i <= n; i++) {
		// In below for loop, previous character
		// is processed in current iteration. That
		// is why a dummy character is added to make
		// sure that loop runs one extra iteration.
		str += '$';
		let len = str.length;

		let cnt = 1; // Initialize count of matching chars
		let tmp = ""; // Initialize i'th term in series

		// Process previous term to find the next term
		for (let j = 1; j < len; j++) {
			// If current character does't match
			if (str[j] != str[j - 1]) {
				// Append count of str[j-1] to temp
				tmp += cnt;

				// Append str[j-1]
				tmp += str[j - 1];

				// Reset count
				cnt = 1;
			}

			//  If matches, then increment count of matching
			// characters
			else
				cnt++;
		}

		// Update str
		str = tmp;
	}

	return str;
};