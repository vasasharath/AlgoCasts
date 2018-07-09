/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"

*/
var longestPalindrome = function(s) {
  s = '#' + s.split('').join('#') + '#';

  var len = s.length,
    RL = Array(len),
    maxRight = 0,
    pos = 0,
    maxLen = 0,
    subpos = 0;

  for (var i = 0; i < len; ++i) {
    if (i < maxRight) {
      RL[i] = Math.min(RL[2 * pos - i], maxRight - i);
    } else {
      RL[i] = 1;
    }

    while (i - RL[i] >= 0 && i + RL[i] < len &&
      s[i - RL[i]] == s[i + RL[i]]) {
      RL[i] += 1;
    }

    if (RL[i] + i - 1 > maxRight) {
      pos = i;
      maxRight = RL[i] + i - 1;
    }

    if (RL[i] > maxLen) {
      subpos = i;
      maxLen = RL[i];
    }
  }

  var start = subpos - (maxLen - 1),
    end = subpos + (maxLen - 1)
  return s.slice(start, end).replace(/#/g, '');
};