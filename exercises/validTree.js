/*
Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

Example 1:

Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
Output: true
Example 2:

Input: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
Output: false
Note: you can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0,1] is the same as [1,0] and thus will not appear together in edges.
*/
var validTree = function(n, edges) {
    const UnionFind = function(n){
        let parent = {};
        let size = {};
        this.count = n;
        
        for (let i=0; i<n; i++){
            parent[i]=i;
            size[i]=1;
        }

        this.find = (x) => {
            if (parent[x]===x) return x;
            parent[x] = this.find(parent[x]);
            return parent[x];
        }

        this.union = (x,y) => {
            let rootX = this.find(x);
            let rootY = this.find(y);

            if (rootX === rootY) return false;
            if (size[rootX] > size[rootY]){
                size[rootX] += size[rootY];
                parent[rootY] = rootX;
            }else{
                size[rootY] += size[rootX];
                parent[rootX] = rootY;
            }
            this.count--;
            return true;
        }
    }

    const UF = new UnionFind(n);
    for (let edge of edges){
        if (!UF.union(edge[0], edge[1])) return false;
    }
    return UF.count===1; 
};