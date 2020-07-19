/*
Think about Zuma Game. You have a row of balls on the table, colored red(R), yellow(Y), blue(B), green(G), and white(W). You also have several balls in your hand.

Each time, you may choose a ball in your hand, and insert it into the row (including the leftmost place and rightmost place). Then, if there is a group of 3 or more balls in the same color touching, remove these balls. Keep doing this until no more balls can be removed.

Find the minimal balls you have to insert to remove all the balls on the table. If you cannot remove all the balls, output -1.

 

Example 1:

Input: board = "WRRBBW", hand = "RB"
Output: -1
Explanation: WRRBBW -> WRR[R]BBW -> WBBW -> WBB[B]W -> WW
Example 2:

Input: board = "WWRRBBWW", hand = "WRBRW"
Output: 2
Explanation: WWRRBBWW -> WWRR[R]BBWW -> WWBBWW -> WWBB[B]WW -> WWWW -> empty
Example 3:

Input: board = "G", hand = "GGGGG"
Output: 2
Explanation: G -> G[G] -> GG[G] -> empty 
Example 4:

Input: board = "RBYYBBRRB", hand = "YRBGB"
Output: 3
Explanation: RBYYBBRRB -> RBYY[Y]BBRRB -> RBBBRRB -> RRRB -> B -> B[B] -> BB[B] -> empty 
 

Constraints:

You may assume that the initial row of balls on the table won’t have any 3 or more consecutive balls with the same color.
1 <= board.length <= 16
1 <= hand.length <= 5
Both input strings will be non-empty and only contain characters 'R','Y','B','G','W'.
*/
function findMinStep(board, hand) {
  const handMap = {};
  let hl = hand.length;
  while (hl--) {
    const hc = hand[hl];
    handMap[hc] = handMap[hc] + 1 || 1;
  }
  return resolveBoard(board, handMap);
}

function resolveBoard(board, hand) {
  const bl = board.length;
  if (bl === 0) {
    return 0;
  }
  let min = Infinity;
  let i = -1;
  while (++i < bl) {
    const bc = board[i];
    const hc = hand[bc] || 0;
    let j = i;
    while (board[++j] === bc) {}
    const sum = j - i;
    if (hc + sum < 3) {
      continue;
    }
    const used = sum >= 3 ? 0 : 3 - sum;
    hand[bc] -= used;
    const nextBoard = board.slice(0, i) + board.slice(j);
    const next = resolveBoard(nextBoard, hand);
    hand[bc] += used;
    if (next === -1) {
      continue;
    }
    min = Math.min(min, next + used);
  }
  return min === Infinity ? -1 : min;
}