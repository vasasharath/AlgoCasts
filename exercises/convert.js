/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
*/
var convert = function(s, n) {
    let output = "";

  for (let i = 0; i < n; i++) { // iterate once through rows, adding to output string by row
    if (i === 0) { // for first row, increments are (n - 1) * 2, or 1 if n = 1
      let incr = n === 1 ? 1 : (n - 1) * 2;
      for (let j = 0; j < s.length; j += incr) {
        output += s[j];
      }
    } else if (i === n - 1) { // for last row, increments are same as first row
      let incr = (n - 1) * 2;
      for (let j = i; j < s.length; j += incr) {
        output += s[j];
      }
    } else { // for middle rows, increments (determined by n and i) alternate
      let incr1 = (n - i - 1) * 2;
      let incr2 = (n - 1) * 2 - incr1;
      let incr;

      for (let j = i; j < s.length; j += incr) {
        output += s[j];
        incr = incr === incr1 ? incr2 : incr1;
      }
    }
  }

  return output;
};