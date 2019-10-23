/*
According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Example:

Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
Follow up:

Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?
*/
var gameOfLife = function(board) {
   var m = board.length, n = board[0].length;
  var result = [], i, j, k, liveNum;
  for (i = 0; i < m; ++i) result.push([]);
  
  var visit = function (x, y) {
    var count = 0;
    for (k = x - 1; k <= x + 1; ++k) {
      if (board[k] && board[k][y - 1] == 1) ++count;
      if (board[k] && board[k][y + 1] == 1) ++count;
    }
    if (board[x - 1] && board[x - 1][y] == 1) ++count;
    if (board[x + 1] && board[x + 1][y] == 1) ++count;
    return count;
  }
  
  for (i = 0; i < m; ++i) {
    for (j = 0; j < n; ++j) {
      liveNum = visit(i, j);
      if (board[i][j] == 1 && liveNum < 2) result[i][j] = 0;
      if (board[i][j] == 1 && (liveNum == 2 || liveNum == 3)) result[i][j] = 1;
      if (board[i][j] == 1 && liveNum > 3) result[i][j] = 0;
      if (board[i][j] == 0 && liveNum == 3) result[i][j] = 1;
    }
  }
  
  for (i = 0; i < m; ++i) {
    for (j = 0; j < n; ++j) {
      board[i][j] = result[i][j] === undefined ? board[i][j] : result[i][j];
    }
  }
};