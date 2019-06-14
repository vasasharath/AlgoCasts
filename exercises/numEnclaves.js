/*
Given a 2D array A, each cell is 0 (representing sea) or 1 (representing land)

A move consists of walking from one land square 4-directionally to another land square, or off the boundary of the grid.

Return the number of land squares in the grid for which we cannot walk off the boundary of the grid in any number of moves.

 

Example 1:

Input: [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
Output: 3
Explanation: 
There are three 1s that are enclosed by 0s, and one 1 that isn't enclosed because its on the boundary.
Example 2:

Input: [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
Output: 0
Explanation: 
All 1s are either on the boundary or can reach the boundary.
 

Note:

1 <= A.length <= 500
1 <= A[i].length <= 500
0 <= A[i][j] <= 1
All rows have the same size.
*/
var numEnclaves = function(matrix) {
  var lastRow = matrix.length-1;
  var lastCol = matrix[0].length-1;
  for(var r=0; r<matrix.length; r++) {
    clearRecursive(matrix, r, 0);
    clearRecursive(matrix, r, lastCol);
  }
  for(var c=0; c<matrix[0].length; c++) {
    clearRecursive(matrix, 0, c);
    clearRecursive(matrix, lastRow, c);
  }
  var count = 0;
  for(var r=0; r<matrix.length; r++) {
    for(var c=0; c<matrix[0].length; c++) {
      if(matrix[r][c] === 1) count++;
    }
  }
  return count;
};
//+++++++++++++++++++++++++
// recursive
//+++++++++++++++++++++++++
function clearRecursive(matrix, r, c) {
  if(r<0 || c<0 ||
     r>=matrix.length || c>=matrix[0].length ||
     matrix[r][c] === 0) {
    return;
  }
  matrix[r][c] = 0;
  clearRecursive(matrix, r-1, c);
  clearRecursive(matrix, r+1, c);
  clearRecursive(matrix, r, c-1);
  clearRecursive(matrix, r, c+1);
}