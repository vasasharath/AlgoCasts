/*
You are given an m x n binary grid, where each 1 represents a brick and 0 represents an empty space. A brick is stable if:

It is directly connected to the top of the grid, or
At least one other brick in its four adjacent cells is stable.
You are also given an array hits, which is a sequence of erasures we want to apply. Each time we want to erase the brick at the location hits[i] = (rowi, coli). The brick on that location (if it exists) will disappear. Some other bricks may no longer be stable because of that erasure and will fall. Once a brick falls, it is immediately erased from the grid (i.e., it does not land on other stable bricks).

Return an array result, where each result[i] is the number of bricks that will fall after the ith erasure is applied.

Note that an erasure may refer to a location with no brick, and if it does, no bricks drop.

 

Example 1:

Input: grid = [[1,0,0,0],[1,1,1,0]], hits = [[1,0]]
Output: [2]
Explanation: Starting with the grid:
[[1,0,0,0],
 [1,1,1,0]]
We erase the underlined brick at (1,0), resulting in the grid:
[[1,0,0,0],
 [0,1,1,0]]
The two underlined bricks are no longer stable as they are no longer connected to the top nor adjacent to another stable brick, so they will fall. The resulting grid is:
[[1,0,0,0],
 [0,0,0,0]]
Hence the result is [2].
Example 2:

Input: grid = [[1,0,0,0],[1,1,0,0]], hits = [[1,1],[1,0]]
Output: [0,0]
Explanation: Starting with the grid:
[[1,0,0,0],
 [1,1,0,0]]
We erase the underlined brick at (1,1), resulting in the grid:
[[1,0,0,0],
 [1,0,0,0]]
All remaining bricks are still stable, so no bricks fall. The grid remains the same:
[[1,0,0,0],
 [1,0,0,0]]
Next, we erase the underlined brick at (1,0), resulting in the grid:
[[1,0,0,0],
 [0,0,0,0]]
Once again, all remaining bricks are still stable, so no bricks fall.
Hence the result is [0,0].
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
grid[i][j] is 0 or 1.
1 <= hits.length <= 4 * 104
hits[i].length == 2
0 <= xi <= m - 1
0 <= yi <= n - 1
All (xi, yi) are unique.
*/
const EXIST = 100000000;
const NOT_EXIST = 0;

var hitBricks = module.exports = function(grid, hits) {
    
        
        let hitsTime = hits.length;
        let result = Array(hitsTime).fill(0);

        let row = grid.length;
        let col = grid[0].length;
        let gridStatus = Array(row).fill(0).map(() => Array(col).fill(0));

        for (let i = 0; i < hitsTime; i++) {
            let hit = hits[i];
            if (gridStatus[hit[0]][hit[1]] == 0) {
                gridStatus[hit[0]][hit[1]] = (i + 1);
            }
        }

        for (let i = 0; i < col; i++) {
            active(grid, gridStatus, 0, i);
        }

        for (let i = hitsTime - 1; i >= 0; i--) {
            let hit = hits[i];
            result[i] = restore(grid, gridStatus, hit[0], hit[1], i + 1);
            result[i] = result[i] == 0 ? 0 : (result[i] - 1);
        }

        return result;
    }

    function restore(grid, gridStatus, x, y, version) {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
            return 0;
        }
        if (grid[x][y] == 0) {
            return 0;
        }
        if (gridStatus[x][y] == EXIST) {
            return 0;
        }
        if (gridStatus[x][y] != NOT_EXIST && gridStatus[x][y] < version) {
            return 0;
        }
        if ((exist(gridStatus, x - 1, y) ||
                exist(gridStatus, x + 1, y) ||
                exist(gridStatus, x, y - 1) ||
                exist(gridStatus, x, y + 1)) == false) {
            return 0;
        }
        gridStatus[x][y] = EXIST;
        return 1 + restore(grid, gridStatus, x - 1, y, version) +
                restore(grid, gridStatus, x + 1, y, version) +
                restore(grid, gridStatus, x, y - 1, version) +
                restore(grid, gridStatus, x, y + 1, version);
    }

    function exist(gridStatus, x, y) {
        if (x >= gridStatus.length || y < 0 || y >= gridStatus[0].length) {
            return false;
        }
        return x < 0 || gridStatus[x][y] == EXIST;
    }
    

    function active(grid, gridStatus, x, y) {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
            return;
        }
        if (gridStatus[x][y] != NOT_EXIST || grid[x][y] == 0) {
            return;
        }
        gridStatus[x][y] = EXIST;
        active(grid, gridStatus, x - 1, y);
        active(grid, gridStatus, x + 1, y);
        active(grid, gridStatus, x, y - 1);
        active(grid, gridStatus, x, y + 1);
    }