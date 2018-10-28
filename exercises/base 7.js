/*
Given an integer, return its base 7 string representation.

Example 1:
Input: 100
Output: "202"
Example 2:
Input: -7
Output: "-10"
*/
var convertToBase7 = function(num) {
    if (num === 0) return '0';
  let result = [];
  let isNegetive = false;
  if (num < 0) {
    num = -num;
    isNegetive = true;
  }
  while(num !== 0) {
    result.push((num%7).toString());
    num = Math.floor(num/7);
  }
  if (isNegetive) result.push('-');
  return result.reverse().join('');
};