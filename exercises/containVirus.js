/*
A virus is spreading rapidly, and your task is to quarantine the infected area by installing walls.

The world is modeled as a 2-D array of cells, where 0 represents uninfected cells, and 1 represents cells contaminated with the virus. A wall (and only one wall) can be installed between any two 4-directionally adjacent cells, on the shared boundary.

Every night, the virus spreads to all neighboring cells in all four directions unless blocked by a wall. Resources are limited. Each day, you can install walls around only one region -- the affected area (continuous block of infected cells) that threatens the most uninfected cells the following night. There will never be a tie.

Can you save the day? If so, what is the number of walls required? If not, and the world becomes fully infected, return the number of walls used.

Example 1:
Input: grid = 
[[0,1,0,0,0,0,0,1],
 [0,1,0,0,0,0,0,1],
 [0,0,0,0,0,0,0,1],
 [0,0,0,0,0,0,0,0]]
Output: 10
Explanation:
There are 2 contaminated regions.
On the first day, add 5 walls to quarantine the viral region on the left. The board after the virus spreads is:

[[0,1,0,0,0,0,1,1],
 [0,1,0,0,0,0,1,1],
 [0,0,0,0,0,0,1,1],
 [0,0,0,0,0,0,0,1]]

On the second day, add 5 walls to quarantine the viral region on the right. The virus is fully contained.
Example 2:
Input: grid = 
[[1,1,1],
 [1,0,1],
 [1,1,1]]
Output: 4
Explanation: Even though there is only one cell saved, there are 4 walls built.
Notice that walls are only built on the shared boundary of two different cells.
Example 3:
Input: grid = 
[[1,1,1,0,0,0,0,0,0],
 [1,0,1,0,1,1,1,1,1],
 [1,1,1,0,0,0,0,0,0]]
Output: 13
Explanation: The region on the left only builds two new walls.
Note:
The number of rows and columns of grid will each be in the range [1, 50].
Each grid[i][j] will be either 0 or 1.
Throughout the described process, there is always a contiguous viral region that will infect strictly more uncontaminated squares in the next round.
*/
var containVirus = function(grid) {
  const infected = 1;
  const healthy = 0;
  const quarantined = 2;
  const directions = [[1,0],[-1,0],[0,1],[0,-1]];
  const mod = 100;
  const encode = (row, col) => row + (col * mod);
  const decode = (num) => [num % mod, Math.floor(num / mod)];

  const disjointSet = {};
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const coord = encode(row, col);
      disjointSet[coord] = coord;
      if (grid[row][col] === 0) continue;
      if (grid[row][col - 1] === 1) union(coord, encode(row, col - 1));
      if (row > 0 && grid[row - 1][col] === 1) union(coord, encode(row - 1, col));
    }
  }

  let numWalls = 0;
  while (true) {
    const impact = quarantineAndContaminate()
    if (impact === 0) return numWalls;
    numWalls += impact;
    spreadVirus();
  }

  function find(coord) {
      return disjointSet[coord] = disjointSet[coord] === coord ? coord : find(disjointSet[coord]);
  }

  function union(coord, toCoord) {
      return disjointSet[find(coord)] = find(toCoord)
  }

  function quarantineAndContaminate() {
    const impact = new Map();
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] !== infected) continue;
        const root = find(encode(row, col));
        if (!impact.has(root)) impact.set(root, new Set());
        for (let [down, right] of directions) {
          if (grid[row + down] && grid[row + down][col + right] === healthy) {
            impact.get(root).add(encode(row + down, col + right));
          }
        }
      }
    }
    let impactedCoords = new Set();
    let root = null;
    for (let [node, coords] of impact) {
      if (impactedCoords.size < coords.size) {
        impactedCoords = coords;
        root = node
      }
    }
    if (impactedCoords.size === 0) return 0;
    return quarantine(...decode(root));
  }

  function quarantine(row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return 0;
    if (grid[row][col] === 2) return 0;
    if (grid[row][col] === 0) return 1;
    let totalWalls = 0;
    grid[row][col] = 2;
    for (let [down, right] of directions) {
      totalWalls += quarantine(row + down, col + right);
    }
    return totalWalls;
  }

  function spreadVirus() {
    const infectedCoords = new Set();
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] !== healthy) continue
        for (let [down, right] of directions) {
          if (grid[row + down] && grid[row + down][col + right] === infected) {
            infectedCoords.add(encode(row, col))
          }
        }
      }
    }
    for (let coord of infectedCoords) {
      const [row, col] = decode(coord);
      grid[row][col] = 1;
      for (let [down, right] of directions) {
        if (grid[row + down] && grid[row + down][col + right] === 1) {
          union(coord, encode(row + down, col + right));
        }
      }
    }
  }
};