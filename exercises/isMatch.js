/*
Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.
Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
Example 4:

Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
Example 5:

Input:
s = "mississippi"
p = "mis*is*p*."
Output: false
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
     const table = [];

  return match(0, 0);

  function match(i, j) {
    table[i] = table[i] || [];

    if (table[i][j] === undefined) {
      table[i][j] = compute(i,j);
    }

    return table[i][j];
  }

  function compute(i, j) {
    if (s[i] === undefined && p[j] === undefined) {
      return true;
    } else if (p[j] === undefined) {
      return false;
    }

    const astrisk = p[j + 1] === '*';
    if (s[i] === undefined) {
      if (astrisk) {
        return match(i, j + 2);
      } else {
        return false;
      }
    }

    const charMatch = isCharMatch(s[i], p[j]);

    if (astrisk && charMatch) {
      return (
        match(i + 1, j + 2) ||
        match(i, j + 2) ||
        match(i + 1, j)
      );
    } else if (astrisk) {
      return match(i, j + 2);
    } else if (charMatch) {
      return match(i + 1, j + 1);
    } else {
      return false;
    }
  }
}

function isCharMatch(sChar, pChar) {
  return sChar === pChar || pChar === '.';
};