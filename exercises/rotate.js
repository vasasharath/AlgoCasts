/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
*/
var rotate = function(matrix) {
     let startColumn = 0;
    let endColumn = matrix.length - 1;
    let startRow = 0;
    let endRow = matrix.length - 1;
    let firstContainer = [];
    let secondContainer = [];

    while (startColumn <= endColumn && startRow <= endRow) {
        // top
        for (let i = startColumn; i <= endColumn; i++) {
            firstContainer.push(matrix[startRow][i]);
        }

        // right
        const right = matrix[endColumn][endRow];
        for (let i = startRow; i <= endRow; i++) {
            secondContainer.push(matrix[i][endColumn]);
            matrix[i][endColumn] = firstContainer.shift();
        }
        firstContainer.splice(0, firstContainer.length);

        // bottom
        for (let i = endColumn; i >= startColumn; i--) {
            firstContainer.push(matrix[endRow][i]);
            matrix[endRow][i] = secondContainer.shift();
        }
        firstContainer[0] = right;
        const bottom = firstContainer[firstContainer.length - 1];
        secondContainer.splice(0, secondContainer.length);

        // left
        for (let i = endRow; i >= startRow; i--) {
            secondContainer.push(matrix[i][startColumn]);
            matrix[i][startColumn] = firstContainer.shift();
        }
        secondContainer[0] = bottom;
        firstContainer.splice(0, firstContainer.length);

        // top
        for (let i = startColumn; i <= endColumn; i++) {
            matrix[startRow][i] = secondContainer.shift();
        }
        secondContainer.splice(0, secondContainer.length);

        endRow--;
        startRow++;
        endColumn--;
        startColumn++;
    }

    return matrix;
};