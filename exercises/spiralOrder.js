/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/
var spiralOrder = function(matrix) {
     if (matrix === null || matrix.length === 0 || matrix[0].length === 0) return [];
  let res = [];
  let map = {0: [0, 1], 1: [1, 0], 2: [0, -1], 3: [-1, 0]};
  let count = 0;
  let row = 0;
  let col = -1;
  while (res.length < matrix.length * matrix[0].length) {
    let navigation = map[count % 4];
    row += navigation[0];
    col += navigation[1];
    res.push(matrix[row][col]);
    matrix[row][col] = 'X';
    if (isBad(map, count, row, col, matrix)) {
      count++;
    }
  }
  return res;
};

function isBad (map, count, row, col, matrix) {
  let restriction = map[count % 4];
  let newRow = restriction[0] + row;
  let newCol = restriction[1] + col;
  if (newRow < 0 || newRow >= matrix.length) {
    return true;
  } else if (newCol < 0 || newCol >= matrix[0].length) {
    return true;
  } else if (matrix[newRow][newCol] === 'X') {
    return true;
  } else {
    return false;
  }
}