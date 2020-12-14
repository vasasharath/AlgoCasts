/*
An undirected, connected tree with N nodes labelled 0...N-1 and N-1 edges are given.

The ith edge connects nodes edges[i][0] and edges[i][1] together.

Return a list ans, where ans[i] is the sum of the distances between node i and all other nodes.

Example 1:

Input: N = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
Output: [8,12,6,10,10,10]
Explanation: 
Here is a diagram of the given tree:
  0
 / \
1   2
   /|\
  3 4 5
We can see that dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
equals 1 + 1 + 2 + 2 + 2 = 8.  Hence, answer[0] = 8, and so on.
Note: 1 <= N <= 10000
*/
var sumOfDistancesInTree = function(N, edges) {
	let nbs = Array.from({length:N}, x=>[]);//record neighbors;
	for(let i=0; i<edges.length; i++){
		nbs[edges[i][0]].push(edges[i][1]);
		nbs[edges[i][1]].push(edges[i][0]);
	}
	//let -1 be the virtual root, 0 be its only child
	let subNum = Array.from({length:N}, x=>0); //record how many nodes a subtree has, including the subtree's root itself
	let dis = Array.from({length:N}, x=>0); //accumulated distances from a node to all its descending nodes
	(function dfs(u, parent){
		subNum[u]=1;
		dis[u]=0;
		for(let v of nbs[u]){
			if(v!==parent){
				dfs(v, u);
				subNum[u]+=subNum[v];
				dis[u] += (dis[v]+subNum[v]);
			}
		}
	})(0,-1);
	//by now, we only get the dis[0] right, now we use dis[0] to get other dis right
	(function cal(u, parent){
		for(let v of nbs[u]){
			if(v !==parent){
				dis[v] = dis[u]+(N-subNum[v])-subNum[v];
				cal(v, u);
			}
		}
	})(0,-1);
	return dis;
};