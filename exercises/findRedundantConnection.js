/*
In this problem, a tree is an undirected graph that is connected and has no cycles.

The given input is a graph that started as a tree with N nodes (with distinct values 1, 2, ..., N), 
with one additional edge added. The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.

The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [u, v] with u < v, 
that represents an undirected edge connecting nodes u and v.

Return an edge that can be removed so that the resulting graph is a tree of N nodes. If there are multiple answers, 
return the answer that occurs last in the given 2D-array. The answer edge [u, v] should be in the same format, with u < v.

Example 1:
Input: [[1,2], [1,3], [2,3]]
Output: [2,3]
Explanation: The given undirected graph will be like this:
  1
 / \
2 - 3
Example 2:
Input: [[1,2], [2,3], [3,4], [1,4], [1,5]]
Output: [1,4]
Explanation: The given undirected graph will be like this:
5 - 1 - 2
    |   |
    4 - 3
Note:
The size of the input 2D-array will be between 3 and 1000.
Every integer represented in the 2D-array will be between 1 and N, where N is the size of the input array.
*/
var findRedundantConnection = function(edges) {
    const dsu = new UnionFind(edges.length);
    for(let edge of edges) {
        const [u,v] = edge;
        if(!dsu.union(u, v)) {
            return edge;
        }
    }
    return [];
};

class UnionFind {
    
    constructor(size) {
        this.parent = new Array(size);
        for(let i = 0; i < size; i++) {
            this.parent[i] = i;
        }
        this.rank = new Array(size);
    }
    
    find(x) {
        if(this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    
    union(x,y) {
        let xr = this.find(x);
        let yr = this.find(y);
        if(xr === yr) {
            return false; // already have the same parent
        } else if(this.rank[xr] < this.rank[yr]) {
            this.parent[xr] = yr;
        } else if(this.rank[xr] > this.rank[yr]) {
            this.parent[yr] = xr;
        } else {
            // same height
            this.parent[yr] = xr;
            this.rank[xr]++;
        }
        return true;
    }
}