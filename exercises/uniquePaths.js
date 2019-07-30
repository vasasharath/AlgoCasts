/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. 
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28
*/
function recursive(m, n, result, x=1, y=1) {
    if(x > m || y > n) return 0;
    if(result[y - 1][x - 1]) return result[y - 1][x - 1];
    if(x === m && y === n) return 1;
    const path = recursive(m, n, result, x + 1, y) + recursive(m, n, result, x, y + 1);
    result[y - 1][x - 1] = path;
    return path;
}

var uniquePaths = function(m, n) {
    let result = []
    for(let i = 0; i < n; i++) {
        let array = []
        for(let j = 0; j < m; j++) {
            array[j] = 0;
        }
        result[i] = array
    }
    if(!m || !n) return 0;
    if(m === 1 || n === 1) return 1;
    return recursive(m, n, result);
};