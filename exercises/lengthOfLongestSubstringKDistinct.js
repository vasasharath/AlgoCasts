/*
Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
Example 2:

Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.
*/
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if (s.length === 0) return 0;

  const map = new Map();
  let l = 0, r = 0, max = 0;
  
  do {
    let count = inc(s.charAt(r++));
    while (count > k) {
      count = dec(s.charAt(l++));
    }
    max = Math.max(r - l, max);
  } while (r < s.length);

  return max;

  function inc(ch) {
    const count = map.get(ch) || 0;
    map.set(ch, count + 1);
    return map.size;
  }
  
  function dec(ch) {
    if (!map.has(ch)) return map.size;
    const count = map.get(ch);
    if (count === 1) {
      map.delete(ch);
    } else {
      map.set(ch, count - 1);
    }
    return map.size;
  }
};