/*
Given a 01 matrix M, find the longest line of consecutive one in the matrix. The line could be horizontal, vertical, diagonal or anti-diagonal.
Example:
Input:
[[0,1,1,0],
 [0,1,1,0],
 [0,0,0,1]]
Output: 3
Hint: The number of elements in the given matrix will not exceed 10,000.
*/
var longestLine = function(M) {
    const m = M.length
  if (!m) return 0
  const n = M[0].length
  if (!n) return 0

  const DP = [...Array(m)].map(() => [...Array(n)].map(() => [0, 0, 0, 0]))
  let max = 0
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (M[i][j]) {
        DP[i][j][0] = (i ? DP[i - 1][j][0] : 0) + 1 // up
        DP[i][j][1] = (j < n - 1 && i ? DP[i - 1][j + 1][1] : 0) + 1 // diag
        DP[i][j][2] = (j && i ? DP[i - 1][j - 1][2] : 0) + 1 // anti diag
        DP[i][j][3] = (j ? DP[i][j - 1][3] : 0) + 1 // left
        
        max = Math.max(max, ...DP[i][j])
      }
    }
  }
  
  return max
};