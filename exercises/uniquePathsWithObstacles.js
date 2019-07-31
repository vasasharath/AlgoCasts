/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. 
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?



An obstacle and empty space is marked as 1 and 0 respectively in the grid.

Note: m and n will be at most 100.

Example 1:

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
*/
const isValid = (x, y, [width, height]) => {
    if (x < 0) return false;
    if (y < 0) return false;
    if (x > width - 1) return false;
    if (y > height - 1) return false;
    
    return true;
};

const uniquePathsWithObstacles = obstacleGrid => {
    if (!obstacleGrid.length) return 0;
    if (1 === obstacleGrid[0][0]) return 0;

	const width = obstacleGrid[0].length;
    const height = obstacleGrid.length;
    if (1 === obstacleGrid[height-1][width-1]) return 0;

    const paths = new Array(width * height).fill(0);
    paths[0] = 1;
    const bounds = [width, height];
    for (let location = 1; location < width*height; ++location) {
        const x = location % width;
        const y = Math.floor(location / width);
        if (obstacleGrid[y][x] === 1) continue;

        const fromTop = isValid(x, y-1, bounds) ? paths[location - width] : 0;
        const fromLeft = isValid(x-1, y, bounds) ? paths[location - 1] : 0;
        paths[location] = fromTop + fromLeft;
    }
    return paths[width * height - 1];
};