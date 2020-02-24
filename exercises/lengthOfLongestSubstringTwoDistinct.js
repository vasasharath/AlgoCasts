/*
Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.

Example 1:

Input: "eceba"
Output: 3
Explanation: t is "ece" which its length is 3.
Example 2:

Input: "ccaabbb"
Output: 5
Explanation: t is "aabbb" which its length is 5.
*/
var lengthOfLongestSubstringTwoDistinct = function(s) {
       let map = new Map();
  let left = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    
    map.set(s[i], i);
    
    if (map.size > 2) {
      let leftMostChar = null;
      let leftMostIndex = Infinity;
      for (let [char, idx] of map) {
        if (idx < leftMostIndex) {
          leftMostChar = char;
          leftMostIndex = idx;
        }
      }
      map.delete(leftMostChar);
      left = leftMostIndex + 1;
    }
    max = Math.max(max, i - left + 1);
  }
  return max;
};