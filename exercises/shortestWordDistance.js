/*
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

word1 and word2 may be the same and they represent two individual words in the list.

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “makes”, word2 = “coding”
Output: 1
Input: word1 = "makes", word2 = "makes"
Output: 3
Note:
You may assume word1 and word2 are both in the list.
*/
var shortestWordDistance = function(words, word1, word2) {
    var diff = words.length, p1 = -words.length, p2 = words.length;

	words.forEach((v, i) => {
		if (v === word1 && v === word2) [p1, p2] = [i, p1];
		else if (v === word1) p1 = i;
		else if (v === word2) p2 = i;

		diff = Math.min(diff, Math.abs(p1 - p2));
	});

	return diff;
};