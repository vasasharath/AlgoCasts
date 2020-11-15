/*
A Tic-Tac-Toe board is given as a string array board. Return True if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.

The board is a 3 x 3 array, and consists of characters " ", "X", and "O".  The " " character represents an empty square.

Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares (" ").
The first player always places "X" characters, while the second player always places "O" characters.
"X" and "O" characters are always placed into empty squares, never filled ones.
The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
Example 1:
Input: board = ["O  ", "   ", "   "]
Output: false
Explanation: The first player always plays "X".

Example 2:
Input: board = ["XOX", " X ", "   "]
Output: false
Explanation: Players take turns making moves.

Example 3:
Input: board = ["XXX", "   ", "OOO"]
Output: false

Example 4:
Input: board = ["XOX", "O O", "XOX"]
Output: true
Note:

board is a length-3 array of strings, where each string board[i] has length 3.
Each board[i][j] is a character in the set {" ", "X", "O"}.
*/
var validTicTacToe = function(board) {

    let count = 0,
        rows = new Array(3).fill(0),
        cols = new Array(3).fill(0),
        l = 0,
        r = 0,
        curr;
    for(let i = 0; i < 3; i ++) {
        for(let j = 0; j < 3; j ++) {
           curr = board[i][j];
            if(curr === 'X') {
                count ++;
                rows[i] ++;
                cols[j] ++;
                if(i === j ) l ++;
                if(i + j === 2) r ++;
            } else if (curr === 'O') {
                count --;
                rows[i] --;
                cols[j] --;
                if(i === j) l --;
                if(i + j === 2) r --;
            }
        }
    }
    if (count < 0 || count > 1) return false;
    const xWin = rows.some(x => x === 3) || cols.some(x => x=== 3) || l === 3 || r === 3;
    const oWin = rows.some(x => x === -3) || cols.some(x => x=== -3) || l === -3 || r === -3;
    if(xWin && oWin) {
        return false;
    } 
    if( xWin && count === 0) {
        return false;
    } 
    if(oWin && count === 1) {
        return false;
    }
    return true;
}