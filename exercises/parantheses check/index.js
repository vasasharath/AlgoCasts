/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/
var isValid = function (str) {
	if (str.length == 0)
		return true;

	let matchingOpeningBracket,
	ch;
	let stack = [];

	let openingBrackets = ['[', '{', '('];
	let closingBrackets = [']', '}', ')'];

	for (let i = 0; i < str.length; i++) {
		ch = str[i];

		if (closingBrackets.indexOf(ch) > -1) {
			matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
				if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
					return false;
				}
		} else {
			stack.push(ch);
		}
	}

	return (stack.length == 0);
};