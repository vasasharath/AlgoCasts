/*
Given a string which contains only lowercase letters, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Example 1:

Input: "bcabc"
Output: "abc"
Example 2:

Input: "cbacdcbc"
Output: "acdb"
*/
var removeDuplicateLetters = function(s) {
  if (s.length < 2) return s;
  let count = new Array(26).fill(0);
  let used = new Array(26);
  let offset = 97;

  for (let i = 0; i < s.length; i++) {
    count[s[i].charCodeAt(0) - offset]++;
  }

  let res = [];
  for (let i = 0; i < s.length; i++) {
    let index = s[i].charCodeAt(0) - offset;
    count[index]--;
    if (!used[index]) {
      while (
        res.length > 0
        && res[res.length - 1].charCodeAt(0) - offset > index
        && count[res[res.length - 1].charCodeAt(0) - offset] > 0
      ) {
        used[res[res.length - 1].charCodeAt(0) - offset] = false;
        res.pop();
      }
      res.push(s[i]);
    }
    used[index] = true;
  }
  return res.join('');
}