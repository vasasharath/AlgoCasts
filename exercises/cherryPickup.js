/*
In a N x N grid representing a field of cherries, each cell is one of three possible integers.

 

0 means the cell is empty, so you can pass through;
1 means the cell contains a cherry, that you can pick up and pass through;
-1 means the cell contains a thorn that blocks your way.
 

Your task is to collect maximum number of cherries possible by following the rules below:

 

Starting at the position (0, 0) and reaching (N-1, N-1) by moving right or down through valid path cells (cells with value 0 or 1);
After reaching (N-1, N-1), returning to (0, 0) by moving left or up through valid path cells;
When passing through a path cell containing a cherry, you pick it up and the cell becomes an empty cell (0);
If there is no valid path between (0, 0) and (N-1, N-1), then no cherries can be collected.
 

 

Example 1:

Input: grid =
[[0, 1, -1],
 [1, 0, -1],
 [1, 1,  1]]
Output: 5
Explanation: 
The player started at (0, 0) and went down, down, right right to reach (2, 2).
4 cherries were picked up during this single trip, and the matrix becomes [[0,1,-1],[0,0,-1],[0,0,0]].
Then, the player went left, up, up, left to return home, picking up one more cherry.
The total number of cherries picked up is 5, and this is the maximum possible.
 

Note:

grid is an N by N 2D array, with 1 <= N <= 50.
Each grid[i][j] is an integer in the set {-1, 0, 1}.
It is guaranteed that grid[0][0] and grid[N-1][N-1] are not -1.
*/
var cherryPickup = function(grid) {
  const m = grid.length;
  let dp = initDP(m + 1);
  
  // we choose 1 based matrix
  dp[1][1][1] = grid[0][0];
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= m; j++) {
      for(let p = 1; p <= m; p++) {
        let q = i + j - p;
        if(q < 1 || q > m || grid[i - 1][j - 1] == -1 || grid[p - 1][q - 1] == -1) continue;
        // that's the reason we choose 1 based instead of 0 based dp because of the i - 1
        let curr = Math.max(dp[i - 1][j][p], dp[i - 1][j][p - 1], dp[i][j - 1][p], dp[i][j - 1][p - 1]);
        if(curr < 0) continue;//can not access, four ways got blocked
        dp[i][j][p] = curr + grid[i - 1][j - 1];
        if(i != p) dp[i][j][p] += grid[p - 1][q - 1];
      }
    }
  }
  return Math.max(dp[m][m][m], 0);
};

function initDP(m) {
  let dp = Array(m).fill(0);
  for(let i = 0; i < m; i++) {
    let temp = [];
    let arr = Array(m).fill(Number.NEGATIVE_INFINITY);
    for(let j = 0; j < m; j++) {
      temp.push(arr.slice());
    }
    dp[i] = temp;
  }
  return dp;
}