/*
In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

 

Example 1:



Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Note:

1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2.
*/
var orangesRotting = function(grid) {
    let q = [];
    let numFresh = 0;
    let minutes = 0;
    // Push rotten oranges to the stack and count fresh oranges
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2)
                q.push([i,j]);
            if (grid[i][j] === 1)
                numFresh++;
        }
    }
	
    while (q.length && numFresh) {
		let newQ = []; // queue for next minute
        while (q.length) {
            let badOrange = q.shift();
            let newRottens = infectOthers(grid, badOrange[0], badOrange[1], newQ);
            numFresh -= newRottens;
        }
        
        minutes++;
        q = newQ;
    }
    if (numFresh !== 0)
		return -1;
	return minutes;
};

// Infect surrounding oranges
// Return the number of newly infected oranges
var infectOthers = function(grid, i, j, q) {
    let infected = 0;
    if (i > 0 && grid[i-1][j] === 1) {
        grid[i-1][j]++;
        infected++;
        q.push([i-1,j]);
    }
    if (j > 0 && grid[i][j-1] === 1) {
        grid[i][j-1]++;
        infected++;
        q.push([i,j-1]);
    }
    if (i < grid.length-1 && grid[i+1][j] === 1) {
        grid[i+1][j]++;
        infected++;
        q.push([i+1,j]);
    } 
    if (j < grid[0].length-1 && grid[i][j+1] === 1) {
        grid[i][j+1]++;
        infected++;
        q.push([i,j+1]);
    }
    
    return infected;
}