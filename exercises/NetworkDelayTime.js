/*
There are N network nodes, labelled 1 to N.

Given times, a list of travel times as directed edges times[i] = (u, v, w), 
where u is the source node, v is the target node, and w is the time it takes for a signal to travel from source to target.

Now, we send a signal from a certain node K. How long will it take for all nodes to receive the signal? If it is impossible, return -1.

Note:
N will be in the range [1, 100].
K will be in the range [1, N].
The length of times will be in the range [1, 6000].
All edges times[i] = (u, v, w) will have 1 <= u, v <= N and 1 <= w <= 100.
*/
function Node(name) {
  this.name = name;
  this.next = [];
  this.visited = false;
  this.time = Infinity;
}

function popSmallestTime(list) {
  let min = Infinity;
  
  const minIndex = list.reduce((acc, e, i) => {
    if (e.time < min) {
      min = e.time;
      return i; 
    }
    return acc
  }, 0);

  return list.splice(minIndex, 1)[0];
}

function createGraph(numNodes, edges) {
  const nodes = {};

  for(var i = 1; i <= numNodes; i++) {
    nodes[i] = new Node(i);
  }

  edges.forEach(([u, v, w]) => {
    nodes[u].next.push([nodes[v], w]);
  });

  return nodes;
}

var networkDelayTime = function(times, N, K) {
  const processList = []
  const visitedList = [];

  const nodes = createGraph(N, times);
  const unvisited = Object.values(nodes);

  let minTime = 0;

  nodes[K].time = 0;
  nodes[K].visited = true;

  processList.push(nodes[K]);

  while (processList.length) {
    const node = popSmallestTime(processList);
    minTime = node.time;

    node.next.forEach(([next, weight]) => {
      if ((node.time + weight) < next.time) {
        next.time = node.time + weight;
      }
      if(!next.visited) {
        processList.push(next);
        next.visited = true;
      }
    });

    visitedList.push(node);
  }

  return visitedList.length !== N ? -1 : minTime;
};