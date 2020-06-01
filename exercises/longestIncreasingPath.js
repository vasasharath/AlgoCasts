/*
Given an integer matrix, find the length of the longest increasing path.

From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

Example 1:

Input: nums = 
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
] 
Output: 4 
Explanation: The longest increasing path is [1, 2, 6, 9].
Example 2:

Input: nums = 
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
] 
Output: 4 
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
*/
var longestIncreasingPath = function(matrix) {
if (matrix == null || !matrix.length || !matrix[0].length) return 0;

const row = matrix.length;
const col = matrix[0].length;

const cache = new Array(row);
for (let i = 0; i < row; ++i) {
cache[i] = new Array(col);
}

let ans = 0;
for (let i = 0; i < matrix.length; ++i) {
for (let j = 0; j < matrix[0].length; ++j) {
ans = Math.max(ans, helper(matrix, cache, -1, i, j));
}
}

return ans;
};

function helper(matrix, cache, prev, row, col) {
if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) {
return 0;
}

let curr = matrix[row][col];

if (curr <= prev) return 0;

if (cache[row][col]) {
    return cache[row][col];
}

let a = 1 + helper(matrix, cache, curr, row + 1, col);
let b = 1 + helper(matrix, cache, curr, row - 1, col);
let c = 1 + helper(matrix, cache, curr, row, col + 1);
let d = 1 + helper(matrix, cache, curr, row, col - 1);

let max = Math.max(a, Math.max(b, Math.max(c, d)));

cache[row][col] = max;

return max;
}