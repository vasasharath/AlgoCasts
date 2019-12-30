/*
Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

 

Example 1:

Input:
[[0,0,0],
 [0,1,0],
 [0,0,0]]

Output:
[[0,0,0],
 [0,1,0],
 [0,0,0]]
Example 2:

Input:
[[0,0,0],
 [0,1,0],
 [1,1,1]]

Output:
[[0,0,0],
 [0,1,0],
 [1,2,1]]
 

Note:

The number of elements of the given matrix will not exceed 10,000.
There are at least one 0 in the given matrix.
The cells are adjacent in only four directions: up, down, left and right.
*/
const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

function updateMatrix(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let queue = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        queue.push([i, j]);
      } else matrix[i][j] = Number.MAX_VALUE;
    }
  }

  while (queue.length) {
    const [i, j] = queue.shift();
    for (let d of dirs) {
      const row = i + d[0];
      const col = j + d[1];

      if (
        row < 0 || row >= m || col < 0 || col >= n || matrix[row][col] <= matrix[i][j] + 1
      ) continue;
      queue.push([row, col]);
      matrix[row][col] = matrix[i][j] + 1;
    }
  }

  return matrix;
}