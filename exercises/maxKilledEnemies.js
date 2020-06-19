/*
Given a 2D grid, each cell is either a wall 'W', an enemy 'E' or empty '0' (the number zero), return the maximum enemies you can kill using one bomb.
The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since the wall is too strong to be destroyed.
Note: You can only put the bomb at an empty cell.

Example:

Input: [["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]
Output: 3 
Explanation: For the given grid,

0 E 0 0 
E 0 W E 
0 E 0 0

Placing a bomb at (1,1) kills 3 enemies.
*/
const maxKilledEnemies = (grid) => {
    let maxMurder = 0;
    
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] === '0') {
                const maxKill = throwBomb(grid, row, col, 'center');
                maxMurder = Math.max(maxMurder, maxKill);
            }
        }
    }
    
    return maxMurder;
};

const throwBomb = (grid, row, col, direction) => {
    if(
        row >= grid.length 
        || row < 0
        || col >= grid[0].length
        || col < 0
        || grid[row][col] === 'W') return 0;
    
    let killCount = 0;
    if(grid[row][col] === 'E') killCount += 1;
    
    switch(direction) {
        case 'up':
            return killCount + throwBomb(grid, row - 1, col, direction);
        case 'down':
            return killCount + throwBomb(grid, row + 1, col, direction);
        case 'left':
            return killCount + throwBomb(grid, row, col - 1, direction);
        case 'right':
            return killCount + throwBomb(grid, row, col + 1, direction);
        case 'center':
            const killUp = throwBomb(grid, row - 1, col, 'up');
            const killDown = throwBomb(grid, row + 1, col, 'down');
            const killLeft = throwBomb(grid, row, col - 1, 'left');
            const killRight = throwBomb(grid, row, col + 1, 'right');
            return killCount + killUp + killDown + killLeft + killRight;
    }
};