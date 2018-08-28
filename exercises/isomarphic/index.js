/*
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
Note:
You may assume both s and t have the same length.
*/

var isIsomorphic = function (s, t) {
	const hashMapS = {};
	const hashMapT = {};
	for (var i = 0, l = s.length; i < l; i++) {
		if (hashMapS[s[i]] === undefined && hashMapT[t[i]] === undefined) {
			hashMapS[s[i]] = t[i];
			hashMapT[t[i]] = s[i];
		} else if (hashMapS[s[i]] !== t[i]) {
			return false;
		}
	}
	return true;
};