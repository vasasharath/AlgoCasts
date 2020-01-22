/*
Given two words word1 and word2, find the minimum number of steps required to make word1 and word2 the same, where in each step you can delete one character in either string.

Example 1:
Input: "sea", "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
Note:
The length of given words won't exceed 500.
Characters in given words can only be lower-case letters.
*/
var minDistance = function(word1, word2) {
  if (word1 === word2) { return 0; }
    
    // Establish relative word lengths to put longer on Y-axis
    const [long, short] = word1.length >= word2.length 
        ? [word1, word2] : [word2, word1];
    
    // Create matrix for dynamic programming approach
    const matrix = Array(long.length + 1).fill(null).map(el => Array(short.length + 1).fill(null));
    // The longest common subsequence up to letter 0 is 0
    matrix.forEach(row => row[0] = 0);
    matrix[0] = matrix[0].map(el => 0);
    
    // Helper to fill in a row
    const fillInRow = function(rowIdx) {
        for (let colIdx = 1; colIdx < matrix[rowIdx].length; colIdx++) {
            fillInSq(rowIdx, colIdx);
        }
    };

    // Helper to fill in a square
    const fillInSq = function(rowIdx, colIdx) {
        // If the letters in the words match...
        if (long[rowIdx - 1] === short[colIdx - 1]) {
            // ... we've found a longer common subsequence
            matrix[rowIdx][colIdx] = 1 + matrix[rowIdx - 1][colIdx - 1];
        } else {
            // If no match, then longest common subsequence is whichever we already had
            matrix[rowIdx][colIdx] = Math.max(matrix[rowIdx - 1][colIdx], matrix[rowIdx][colIdx - 1]);
        }   
    }
    
    // Use helpers to fill in whole matrix
    for (let rowIdx = 1; rowIdx <= long.length; rowIdx++) {
        fillInRow(rowIdx);
    }
    
    // Bottom right square is length of longest common subsequence
    return (long.length + short.length) - (2 * matrix[long.length][short.length]);
};