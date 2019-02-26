/*
On a N * N grid, we place some 1 * 1 * 1 cubes.

Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).

Return the total surface area of the resulting shapes.

 

Example 1:

Input: [[2]]
Output: 10
Example 2:

Input: [[1,2],[3,4]]
Output: 34
Example 3:

Input: [[1,0],[0,2]]
Output: 16
Example 4:

Input: [[1,1,1],[1,0,1],[1,1,1]]
Output: 32
Example 5:

Input: [[2,2,2],[2,1,2],[2,2,2]]
Output: 46
 

Note:

1 <= N <= 50
0 <= grid[i][j] <= 50
*/
var surfaceArea = function(grid) {
    var xy = 0;
  var zx = 0;
  var zy = 0;
  var last;
  for (var x = 0; x < grid.length; x++) {
    last = 0;
    // Paint strips along the y axis
    for (var y = 0; y < grid[0].length; y++) {
      zx += Math.abs(grid[x][y] - last);
      last = grid[x][y];
      // Here we add the tower's surface contribution to the XY plane
      if (grid[x][y] > 0) {
        xy++;
      }
    }
    zx += last;
  }
  for (var y = 0; y < grid[0].length; y++) {
    last = 0;
    // Paint strips along the x axis
    for (var x = 0; x < grid.length; x++) {
      zy += Math.abs(grid[x][y] - last);
      last = grid[x][y];
    }
    zy += last;
  }
  // Double the XY plane area to account for top and bottom surfaces
  return 2 * xy + zx + zy;
};