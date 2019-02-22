/*
A robot on an infinite grid starts at point (0, 0) and faces north.  The robot can receive one of three possible types of commands:

-2: turn left 90 degrees
-1: turn right 90 degrees
1 <= x <= 9: move forward x units
Some of the grid squares are obstacles. 

The i-th obstacle is at grid point (obstacles[i][0], obstacles[i][1])

If the robot would try to move onto them, the robot stays on the previous grid square instead 
(but still continues following the rest of the route.)

Return the square of the maximum Euclidean distance that the robot will be from the origin.

 

Example 1:

Input: commands = [4,-1,3], obstacles = []
Output: 25
Explanation: robot will go to (3, 4)
Example 2:

Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
Output: 65
Explanation: robot will be stuck at (1, 4) before turning left and going to (1, 8)
 

Note:

0 <= commands.length <= 10000
0 <= obstacles.length <= 10000
-30000 <= obstacle[i][0] <= 30000
-30000 <= obstacle[i][1] <= 30000
The answer is guaranteed to be less than 2 ^ 31.
*/
var robotSim = function(commands, obstacles) {
   const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const set = new Set(obstacles.map(v => v[0]+':'+v[1]));

  let max = 0;
  let dir = 0;
  let x = 0;
  let y = 0;

  for (let c of commands) {
    if (c === -1) {
      dir = (dir+1)%4;
    } else if (c === -2) {
      dir = (dir+3)%4;
    } else {
      const [dx, dy] = dirs[dir];
      for (let i = 0; i < c; i++) {
        x += dx;
        y += dy;
        if (set.has(x+':'+y)) {
          x -= dx;
          y -= dy;
          break;
        }
      }
      max = Math.max(max, x*x+y*y);
    }
  }

  return max;
};