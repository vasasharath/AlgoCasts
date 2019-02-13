/*
A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, 
column, and both diagonals all have the same sum.

Given an grid of integers, how many 3 x 3 "magic square" subgrids are there?  (Each subgrid is contiguous).

 

Example 1:

Input: [[4,3,8,4],
        [9,5,1,9],
        [2,7,6,2]]
Output: 1
Explanation: 
The following subgrid is a 3 x 3 magic square:
438
951
276

while this one is not:
384
519
762

In total, there is only one magic square inside the given grid.
Note:

1 <= grid.length <= 10
1 <= grid[0].length <= 10
0 <= grid[i][j] <= 15
Accepted
10,231
Submissions
29,123
*/
var numMagicSquaresInside = function(grid) {
    if (!grid || grid.length < 3 || grid[0].length < 3) return 0;
    
    let row = grid.length;
    let col = grid[0].length;
    let count = 0;
    
    for (let r = 1; r < row - 1; r++) {
        for (let c = 1; c < col - 1; c++) {
            if (grid[r][c] === 5) {
                
                if (!validSurroundNum(grid,r,c)) continue;
                
                if (grid[r-1][c-1] + grid[r+1][c+1] !== 10) continue; // left top, right bottom = 10
                if (grid[r+1][c-1] + grid[r-1][c+1] !== 10) continue; // left bottom, right top =10
                
                if (grid[r-1][c-1] + grid[r-1][c] + grid[r-1][c+1] !== 15) continue; // top row = 15
                if (grid[r+1][c-1] + grid[r+1][c] + grid[r+1][c+1] !== 15) continue; // bottom row = 15
                
                if (grid[r-1][c-1] + grid[r][c-1] + grid[r+1][c-1] !== 15) continue; // left col = 15
                if (grid[r-1][c+1] + grid[r][c+1] + grid[r+1][c+1] !== 15) continue; // right col = 15
                
                count += 1;
            }
        }
    }
    return count;
};

function validSurroundNum(grid, x,y) {
    let set = new Set();
    for (let i = -1; i < 1; i++) {
        for (let j = -1; j < 1; j++) {
            if (set.has(grid[x+i][y+j]) || grid[x+i][y+j] < 1 || grid[x+i][y+j] > 9) {
                return false;   
            } else {
                set.add(grid[x+i][y+j]);
            }
        }
    }
    return true;
}