/*
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/
var setZeroes = function(matrix) {
     let col0 = 1;
    for(let i = 0; i < matrix.length; i++) {
      if (matrix[i][0] == 0) col0 = 0;
      for(let j = 1; j < matrix[0].length; j++) {
          if(matrix[i][j] === 0) {
            matrix[i][0] = 0;
            matrix[0][j] = 0;
          }  
      }
  } 

    for(let i=matrix.length-1; i>=0; i--) {
      for(let j=matrix[0].length-1; j>=1; j--) {
        if(matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
      if (col0 === 0) matrix[i][0]=0;

    }
};