/*
Given an array w of positive integers, where w[i] describes the weight of index i, 
write a function pickIndex which randomly picks an index in proportion to its weight.

Note:

1 <= w.length <= 10000
1 <= w[i] <= 10^5
pickIndex will be called at most 10000 times.
Example 1:

Input: 
["Solution","pickIndex"]
[[[1]],[]]
Output: [null,0]
Example 2:

Input: 
["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
[[[1,3]],[],[],[],[],[]]
Output: [null,0,1,1,1,0]
Explanation of Input Syntax:

The input is two lists: the subroutines called and their arguments. Solution's constructor has one argument, the array w. 
pickIndex has no arguments. 
Arguments are always wrapped with a list, even if there aren't any.
*/
/**
 * @param {number[]} w
 */
var Solution = function(w) {
  const newWeights = []
  let sum = 0
  
  for (const weight of w) {
    sum = weight + sum
    newWeights.push(sum)
  }
  
  this.w = newWeights
  this.max = newWeights[newWeights.length - 1]
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  const { max, w } = this
  const target = Math.floor(Math.random() * max)
  
  let left = 0
  let right = w.length
  
  // Begin binary search
  while (left < right) {
    const mid = (left + right) >> 1
    
    if (target >= w[mid]) left = mid + 1
    else right = mid
  }
  
  return left
};
