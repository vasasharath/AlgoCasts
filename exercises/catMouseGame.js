/*
A game on an undirected graph is played by two players, Mouse and Cat, who alternate turns.

The graph is given as follows: graph[a] is a list of all nodes b such that ab is an edge of the graph.

The mouse starts at node 1 and goes first, the cat starts at node 2 and goes second, and there is a hole at node 0.

During each player's turn, they must travel along one edge of the graph that meets where they are.  For example, if the Mouse is at node 1, it must travel to any node in graph[1].

Additionally, it is not allowed for the Cat to travel to the Hole (node 0.)

Then, the game can end in three ways:

If ever the Cat occupies the same node as the Mouse, the Cat wins.
If ever the Mouse reaches the Hole, the Mouse wins.
If ever a position is repeated (i.e., the players are in the same position as a previous turn, and it is the same player's turn to move), the game is a draw.
Given a graph, and assuming both players play optimally, return

1 if the mouse wins the game,
2 if the cat wins the game, or
0 if the game is a draw.
 

Example 1:


Input: graph = [[2,5],[3],[0,4,5],[1,4,5],[2,3],[0,2,3]]
Output: 0
Example 2:


Input: graph = [[1,3],[0],[3],[0,2]]
Output: 1
 

Constraints:

3 <= graph.length <= 50
1 <= graph[i].length < graph.length
0 <= graph[i][j] < graph.length
graph[i][j] != i
graph[i] is unique.
The mouse and the cat can always move. 
*/
const DRAW = 0;
const MOUSE_TURN = 1;
const CAT_TURN = 2;
const MOUSE_WIN = 1;
const CAT_WIN = 2;
const HOLE_POS = 0;
const MOUSE_START_POS = 1;
const CAT_START_POS = 2;
const MAX_GRAPH_SIZE = 50;

var catMouseGame = function (graph) {
  // winner[mouse][cat][turn] - Given game state, will return winner. Initializes to 0, or DRAW
  const winner = create3dArray(MAX_GRAPH_SIZE, MAX_GRAPH_SIZE, 3);
  // Given game state, returns number of child states (ie. subsequent game states) left to check
  const numChildren = create3dArray(MAX_GRAPH_SIZE, MAX_GRAPH_SIZE, 3);

  // Initialize numChildren
  for (let mouse = 0; mouse < graph.length; mouse++) {
    for (let cat = 0; cat < graph.length; cat++) {
      numChildren[mouse][cat][MOUSE_TURN] = graph[mouse].length;
      numChildren[mouse][cat][CAT_TURN] = graph[cat].length;

      // Cat cannot move to hole, so decrement # of cat moves by 1 if there's a hole adjacent
      for (const node of graph[cat]) {
        if (node === HOLE_POS) {
          numChildren[mouse][cat][CAT_TURN]--;
          break;
        }
      }
    }
  }

  // All nodes where we know who will win in the end (no draws). node = [mouse][cat][turn][winner]
  let queue = [];

  // Initialize winner + queue
  for (let i = 1; i < graph.length; i++) {
    for (let turn = MOUSE_TURN; turn <= CAT_TURN; turn++) {
      winner[HOLE_POS][i][turn] = MOUSE_WIN;
      queue.push([HOLE_POS, i, turn, MOUSE_WIN]);
      winner[i][i][turn] = CAT_WIN;
      queue.push([i, i, turn, CAT_WIN]);
    }
  }

  // Percolate
  while (queue.length) {
    const node = queue.shift();
    // const [childMousePos, childCatPos, childTurn, childWinner] = node;
    // Note: childWinner will never be DRAW since we only add winners/losers to stack
    const childWinner = node[3];

    const parents = getParents(graph, node);

    for (parent of parents) {
      const [parentMousePos, parentCatPos, parentTurn] = parent;
      // since we're trying to discover parent winner, we only care if parent winner
      // hasn't been determined yet (ie. is set to DRAW since it's initialized to 0 = DRAW)
      if (winner[parentMousePos][parentCatPos][parentTurn] === DRAW) {
        if (childWinner === parentTurn) {
          // guaranteed victory
          winner[parentMousePos][parentCatPos][parentTurn] = childWinner;
          queue.push([parentMousePos, parentCatPos, parentTurn, childWinner]);
        } else {
          // Decrement count of parents' neutral children
          if (--numChildren[parentMousePos][parentCatPos][parentTurn] === 0) {
            // Parent is loser
            winner[parentMousePos][parentCatPos][parentTurn] = childWinner;
            queue.push([parentMousePos, parentCatPos, parentTurn, childWinner]);
          }
        }
      }
    }
  }

  return winner[MOUSE_START_POS][CAT_START_POS][MOUSE_TURN];
};

/**
 * Returns all parent nodes, ie. any potential previous state of the game
 * @param {[mousePos, catPos, turn]} node
 * @returns {[[mousePos, catPos, turn]]}
 */
function getParents(graph, node) {
  const [mousePos, catPos, turn] = node;
  const result = [];

  if (turn === CAT_TURN) {
    for (const m of graph[mousePos]) {
      result.push([m, catPos, MOUSE_TURN]);
    }
  } else {
    for (const c of graph[catPos]) {
      if (c !== HOLE_POS) {
        result.push([mousePos, c, CAT_TURN]);
      }
    }
  }

  return result;
}

function create3dArray(x, y, z) {
  return Array.from(Array(x), () =>
    Array.from(Array(y), () => Array(z).fill(0))
  );
}