/*
A 2d grid map of m rows and n columns is initially filled with water. We may perform an addLand operation which turns the water at position (row, col) into a land. Given a list of positions to operate, count the number of islands after each addLand operation. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example:

Input: m = 3, n = 3, positions = [[0,0], [0,1], [1,2], [2,1]]
Output: [1,1,2,3]
Explanation:

Initially, the 2d grid grid is filled with water. (Assume 0 represents water and 1 represents land).

0 0 0
0 0 0
0 0 0
Operation #1: addLand(0, 0) turns the water at grid[0][0] into a land.

1 0 0
0 0 0   Number of islands = 1
0 0 0
Operation #2: addLand(0, 1) turns the water at grid[0][1] into a land.

1 1 0
0 0 0   Number of islands = 1
0 0 0
Operation #3: addLand(1, 2) turns the water at grid[1][2] into a land.

1 1 0
0 0 1   Number of islands = 2
0 0 0
Operation #4: addLand(2, 1) turns the water at grid[2][1] into a land.

1 1 0
0 0 1   Number of islands = 3
0 1 0
Follow up:

Can you do it in time complexity O(k log mn), where k is the length of the positions?
*/
var numIslands2 = function(m, n, positions) {
  const output = [];
  const set = new DisjointSet();
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  for (const [x, y] of positions) {
    const k1 = encode(x, y, m, n);
    set.find(k1);
    for (const [di, dj] of dirs) {
      const i = x + di;
      const j = y + dj;
      const k2 = encode(i, j, m, n);
      if (isValid(i, j, m, n) && set.has(k2)) {
        set.union(k1, k2);
      }
    }
    output.push(set.nRoots);
  }
  return output;
};

function encode(i, j, m, n) {
  return n * i + j;
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

class DisjointSet {
  constructor() {
    this.roots = {};
    this.nRoots = 0;
  }

  find(r) {
    if (!(r in this.roots)) {
      this.roots[r] = r;
      this.nRoots += 1;
      return r;
    }
    let ptr = r;
    while (this.roots[ptr] !== ptr) {
      this.roots[ptr] = this.roots[this.roots[ptr]];
      ptr = this.roots[ptr];
    }
    return ptr;
  }

  union(p1, p2) {
    const r1 = this.find(p1);
    const r2 = this.find(p2);
    if (r1 !== r2) {
      this.roots[r2] = r1;
      this.nRoots -= 1;
    }
  }

  has(r) {
    return r in this.roots;
  }
}