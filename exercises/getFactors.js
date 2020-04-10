/*
Numbers can be regarded as product of its factors. For example,

8 = 2 x 2 x 2;
  = 2 x 4.
Write a function that takes an integer n and return all possible combinations of its factors.

Note:

You may assume that n is always positive.
Factors should be greater than 1 and less than n.
Example 1:

Input: 1
Output: []
Example 2:

Input: 37
Output:[]
Example 3:

Input: 12
Output:
[
  [2, 6],
  [2, 2, 3],
  [3, 4]
]
Example 4:

Input: 32
Output:
[
  [2, 16],
  [2, 2, 8],
  [2, 2, 2, 4],
  [2, 2, 2, 2, 2],
  [2, 4, 4],
  [4, 8]
]
*/
var getFactors = function(n) {
  var final = [];
  for(var i=2; i*i<=n; i++) {
    if(n%i === 0) {
      var thisFinal = [i, n/i];
      final.push(thisFinal);
      breakFactorRecursive(final, thisFinal);
    }
  }
  return final;
};
//+++++++++++++++++++++++++
// sub-function
//+++++++++++++++++++++++++
function breakFactorRecursive(final, thisFinal) {
  var n = thisFinal[thisFinal.length-1];
  var prevN = thisFinal[thisFinal.length-2];
  var thisFinalWithN = thisFinal.slice(0, thisFinal.length-1);
  for(var i=prevN; i*i<=n; i++) {
    if(n%i === 0) {
      var newFinal = [...thisFinalWithN, i, n/i];
      final.push(newFinal);
      breakFactorRecursive(final, newFinal);
    }
  }
}