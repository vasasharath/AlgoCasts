/*
In a 2D grid of 0s and 1s, we change at most one 0 to a 1.

After, what is the size of the largest island? (An island is a 4-directionally connected group of 1s).

Example 1:

Input: [[1, 0], [0, 1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
Example 2:

Input: [[1, 1], [1, 0]]
Output: 4
Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.
Example 3:

Input: [[1, 1], [1, 1]]
Output: 4
Explanation: Can't change any 0 to 1, only one island with area = 4.
 

Notes:

1 <= grid.length = grid[0].length <= 50.
0 <= grid[i][j] <= 1.
*/
const DIRECTIONS = [[1,0], [-1,0], [0,1], [0,-1]];

function largestIsland(grid) {
    if (!grid || !grid.length) return 0;

    const m = grid.length;
    const n = grid[0].length;
    let max = Number.MIN_VALUE;
    let count = 2;
    let map = {};

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                // mark the island
                const area = dfs(grid, i, j, count);
                max = Math.max(max, area);
                map[count] = area;
                count++;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                let set = new Set();
                let cur = 1;

                // visit it's neighbors
                for (let [row, col] of DIRECTIONS) {
                    const x = row + i;
                    const y = col + j;

                    // bound check
                    if (x < 0 || x >= m || y < 0 || y >= n) continue;

                    const islandId = grid[x][y];
                    if (islandId > 1 && !set.has(islandId)) {
                        set.add(islandId);
                        cur += map[islandId];
                    }
                }
                max = Math.max(max, cur);
            }
        }
    }
    return max;
}

function dfs(grid, row, col, num) {
    // bound check
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return 0;
    if (grid[row][col] === 0 || grid[row][col] === num) return 0;

    grid[row][col] = num;
    return 1 + dfs(grid, row + 1, col, num) + dfs(grid, row - 1, col, num) + 
        dfs(grid, row, col + 1, num) + dfs(grid, row, col - 1, num);
}