/*
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
Empty cells are indicated by the character '.'.


A sudoku puzzle...


...and its solution numbers marked in red.

Note:

The given board contain only digits 1-9 and the character '.'.
You may assume that the given Sudoku puzzle will have a single unique solution.
The given board size is always 9x9.
*/
var solveSudoku = function(board) {
   var solution = (function(board) {
var rowCache = Array(9),
colCache = Array(9),
boxCache = Array(9);

var setCache = function() {
  var row, col, num, box;
  for (row = 0; row < 9; row++) {
    rowCache[row] = Array(9);
    for (col = 0; col < 9; col++) {
      box = 3 * Math.floor(row / 3) + Math.floor(col / 3);
      if (!colCache[col])
        colCache[col] = Array(9)
      if (!boxCache[box])
        boxCache[box] = [];

      num = board[row][col].charCodeAt(0) - '0'.charCodeAt(0);
      if (num >= 1 && num <= 9) {
        rowCache[row][num - 1] = true;
        colCache[col][num - 1] = true;
        boxCache[box][num - 1] = true;
      }
    }
  }
};

var addToCaches = function(row, col, num, exist) {
  var box = 3 * Math.floor(row / 3) + Math.floor(col / 3);
  rowCache[row][num - 1] = exist;
  colCache[col][num - 1] = exist;
  boxCache[box][num - 1] = exist;
};

var inCache = function(num, row, col) {
  return !!(rowCache[row][num - 1] || colCache[col][num - 1] || boxCache[3 * Math.floor(row / 3) + Math.floor(col / 3)][num - 1]);
};

var solve = function(plainIndex) {
  var row, col, num;
  if (plainIndex >= 81) return true;
  row = Math.floor(plainIndex / 9);
  col = plainIndex % 9;
  if (board[row][col] === '.') {
    for (num = 1; num <= 9; num++) {
      if (!inCache(num, row, col)) {
        addToCaches(row, col, num, true);
        if (solve(plainIndex + 1)) {
          board[row][col] = num + '';
          return true;
        }
        addToCaches(row, col, num, false);
      }
    }
  } else {
    return solve(plainIndex + 1);
  }
};

setCache();
if (solve(0)) {
  return board;
}
}(board));
};