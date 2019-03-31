/*
On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.

Return the number of pawns the rook can capture in one move.

 

Example 1:



Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],
[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],
[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation: 
In this example the rook is able to capture all the pawns.
Example 2:



Input: [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],
[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],
[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 0
Explanation: 
Bishops are blocking the rook to capture any pawn.
Example 3:



Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],
["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],
[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation: 
The rook can capture the pawns at positions b5, d6 and f5.
 

Note:

board.length == board[i].length == 8
board[i][j] is either 'R', '.', 'B', or 'p'
There is exactly one cell with board[i][j] == 'R'
*/
var numRookCaptures = function(board) {
    let rookPos = false;

    //Is pawn able to capture: top, right, bottom, left
    let output = [0, 0, 0, 0];

    //Find rook position
    for(let i=0; i < board.length; i++){
      for(let j=0; j < board.length; j++){
        if(board[i][j] === 'R'){
          rookPos = [i, j];
          break;
        }
      }
      if(rookPos) break;
    }

    //Check direcions
    //Horizontally
    for(let h = 0; h < board.length; h++){
      let val = board[rookPos[0]][h];

      if(val !== '.'){
        if(h < rookPos[1]){
          if(val === 'p') output[3] = 1; //left
          else if(output[3] > 0) output[3] = 0;
        }
        else if(h > rookPos[1]){
          if(val === 'p') output[1] = 1; //right
          else break;
        }
      }
    }

    //Vertically
    for(let v = 0; v < board.length; v++){
      let val = board[v][rookPos[1]];

      if(val !== '.'){
        if(v < rookPos[0]){
          if(val === 'p') output[0] = 1; //top
          else if(output[0] > 0) output[0] = 0;
        }
        else if(v > rookPos[0]){
          if(val === 'p') output[2] = 1; //bottom
          else break;
        }
      }
    }

    //Return sum of pawns able to capture
    return output.reduce((x, y) => x + y);
};