/*
Given a positive integer N, how many ways can we write it as a sum of consecutive positive integers?

Example 1:

Input: 5
Output: 2
Explanation: 5 = 5 = 2 + 3
Example 2:

Input: 9
Output: 3
Explanation: 9 = 9 = 4 + 5 = 2 + 3 + 4
Example 3:

Input: 15
Output: 4
Explanation: 15 = 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5
*/
/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function(N) {
     let solutionCount = 0;
  let consecutiveNumberCount = 1;
  while (true) {
    const mid = Math.ceil(N / consecutiveNumberCount);           // Get middle number of sequence containing X numbers
    const countToLeft = Math.floor(consecutiveNumberCount / 2);  // Get count of how many numbers are to the left of mid 
    const leftMostN = mid - countToLeft;                         // Get left-most number in the sequence 
    if (leftMostN < 1) break;                                    // Break if the left-most number is out of bounds
    let sum = mid * consecutiveNumberCount;                      // Calculate the sequence sum
    if (consecutiveNumberCount % 2 === 0) sum -= countToLeft;    // Adjust the sum if it contains an even # of numbers 
    if (sum === N) solutionCount += 1;                           // Count solutions
    consecutiveNumberCount += 1;                                 // Try next sequence length
  }
  return solutionCount;
};