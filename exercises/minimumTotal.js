/*
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
*/
var minimumTotal = function(triangle) {
     let m = triangle.length;
    for(let i = 1; i < m; i++){
    	triangle[i][0] += triangle[i - 1][0];
    	triangle[i][i] += triangle[i - 1][i - 1];
    }
    for(let i = 2; i < m; i++){
    	for(let j = 1; j < i; j++){
    		triangle[i][j] = Math.min(triangle[i-1][j-1], triangle[i-1][j]) + triangle[i][j];
    	}
    }
    return Math.min.apply(null, triangle[m-1])
};