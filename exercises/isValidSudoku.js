/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
*/
var isValidSudoku = function(board) {
    var i,
        j,
        m,
        n,
        num,
        sets = [],
        vsets = [],
        csets = [[],[],[]],
        numArray = ['1','2','3','4','5','6','7','8','9'];
    
    for(i = 0; i < 9; i++){
        sets[i] = new Set(); // init set
        for(j = 0; j < 9; j++){
            m = parseInt(i/3);
            n = parseInt(j/3);
            num = board[i][j];
            if(num === '.') {
                continue;
            }else if(numArray.indexOf(num) !== -1){ // valid number
                vsets[j] = vsets[j] || new Set(); // init vset
                csets[m][n] = csets[m][n] || new Set(); // init cset
                if(sets[i].has(num) || vsets[j].has(num) || csets[m][n].has(num)){
                    return false;
                }else{
                    sets[i].add(board[i][j]);
                    vsets[j].add(board[i][j]);
                    csets[m][n].add(board[i][j]);
                }
            }
        }
    }
    
    return true;
};