/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
*/
var searchMatrix = function(matrix, target) {
     const row = matrix.length
  if (row === 0) return false
  const column = matrix[0].length
  if (column === 0) return false
  let left = 0, right = row * column - 1
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    const midVal = matrix[Math.floor(mid / column)][Math.floor(mid % column)]
    if (midVal === target) {
      return true
    } else if (midVal < target){
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return false
};