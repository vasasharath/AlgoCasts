/*
X is a good number if after rotating each digit individually by 180 degrees, we get a valid number that is different from X.  
Each digit must be rotated - we cannot choose to leave it alone.

A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other; 
6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number and become invalid.

Now given a positive number N, how many numbers X from 1 to N are good?

Example:
Input: 10
Output: 4
Explanation: 
There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.
Note:

N  will be in range [1, 10000].
*/
function advParseInt(x, MAP, base) {
  var r = 0;
  var str = String(x);
  for (var i = 0; i < str.length; ++i) {
    var c = str[i];
    if (MAP[c] >= 0)
      r = r * base + MAP[c];
    else {
      r = r * base + (-MAP[c] + 1);
      r = r * (base ** (str.length - i - 1)) - 1;
      break;
    }
  }
  return r;
}

function badCount(N) {
  var MAP = {
    0: 0,
    1: 1,
    2: -1,
    3: -1,
    4: -1,
    5: -1,
    6: -1,
    7: -1,
    8: 2,
    9: -2,
  };
  
  return advParseInt(N, MAP, 3);
}

function validCount(N) {
  var MAP = {
    0: 0,
    1: 1,
    2: 2,
    3: -2,
    4: -2,
    5: 3,
    6: 4,
    7: -4,
    8: 5,
    9: 6,
  };
  
  return advParseInt(N, MAP, 7);
}

var rotatedDigits = function(N) {
    return validCount(N) - badCount(N);
};