/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.
*/
var lengthOfLastWord = function (s) {
	s = s.trim();
	if (s == null || s == undefined)
		return 0;
	if (s.indexOf(' ') === -1)
		return s.length;
	let word = s.split(' ');
	return word[word.length - 1].length;
};