/*
On an N x N grid, each square grid[i][j] represents the elevation at that point (i,j).

Now rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distance in zero time. Of course, you must stay within the boundaries of the grid during your swim.

You start at the top left square (0, 0). What is the least time until you can reach the bottom right square (N-1, N-1)?

Example 1:

Input: [[0,2],[1,3]]
Output: 3
Explanation:
At time 0, you are in grid location (0, 0).
You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.

You cannot reach point (1, 1) until time 3.
When the depth of water is 3, we can swim anywhere inside the grid.
Example 2:

Input: [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
Output: 16
Explanation:
 0  1  2  3  4
24 23 22 21  5
12 13 14 15 16
11 17 18 19 20
10  9  8  7  6

The final route is marked in bold.
We need to wait until time 16 so that (0, 0) and (4, 4) are connected.
Note:

2 <= N <= 50.
grid[i][j] is a permutation of [0, ..., N*N - 1].
*/
function Heap(compare = (a, b) => a - b) {
  const arr = [];
  return { push, pop, peek, size };

  function size() {
    return arr.length;
  }

  function push(v) {
    arr.push(v);
    bubble();
  }

  function pop() {
    const top = peek();
    const last = arr.pop();
    if (arr.length > 0) {
      arr[0] = last;
      sink();
    }
    return top;
  }

  function peek() {
    return arr[0];
  }

  function bubble() {
    let i = arr.length - 1;
    let p = (i - 1) >> 1;

    while (i !== 0 && compare(arr[i], arr[p]) < 0) {
      [arr[i], arr[p]] = [arr[p], arr[i]];
      i = p;
      p = (i - 1) >> 1;
    }
  }

  function sink() {
    let i = 0;
    for (;;) {
      let next = i;
      for (const childIdx of [i * 2 + 1, i * 2 + 2]) {
        if (childIdx < arr.length && compare(arr[childIdx], arr[next]) < 0) {
          next = childIdx;
        }
      }
      if (next === i) return;
      [arr[i], arr[next]] = [arr[next], arr[i]];
      i = next;
    }
  }
}
function swimInWater(grid) {
  const H = grid.length;
  const W = H && grid[0].length; 
const pq = new Heap((a, b) => grid[a[0]][a[1]]-grid[b[0]][b[1]]);
  const seen = [...Array(H)].map(r => Array(W).fill(false));
  let max = 0;
  
  pq.push([0, 0]);
  seen[0][0] = true;
  while (true) {
    const [r, c] = pq.pop();
    max = Math.max(max, grid[r][c]);
    if (r === H-1 && c === W-1) {
      return max;
    }
    
    for (let [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      const rr = r+dr;
      const cc = c+dc;
      if (rr < 0 || cc < 0 || rr >= H || cc >= W || seen[rr][cc]) continue;
      seen[rr][cc] = true;
      pq.push([rr, cc]);
    }
  }
}