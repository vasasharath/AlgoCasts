/*
For an undirected graph with tree characteristics, we can choose any node as the root. The result graph is then a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Given such a graph, write a function to find all the MHTs and return a list of their root labels.

Format
The graph contains n nodes which are labeled from 0 to n - 1. 
You will be given the number n and a list of undirected edges (each edge is a pair of labels).

You can assume that no duplicate edges will appear in edges. Since all edges are undirected, 
[0, 1] is the same as [1, 0] and thus will not appear together in edges.

Example 1 :

Input: n = 4, edges = [[1, 0], [1, 2], [1, 3]]

        0
        |
        1
       / \
      2   3 

Output: [1]
Example 2 :

Input: n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]

     0  1  2
      \ | /
        3
        |
        4
        |
        5 

Output: [3, 4]
Note:

According to the definition of tree on Wikipedia: “a tree is an undirected graph in which any two vertices are 
connected by exactly one path. In other words, any connected graph without simple cycles is a tree.”
The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.
*/
var findMinHeightTrees = function(n, edges) {
     if (!n || n === 0 || n - 1 !== edges.length) { return []; }
    if (n === 1) { return [0]; }
    
    // calculate edges
    let hash = {};
    for (let i = 0; i < n; i++) {
        hash[i] = [];
    }
    
    for (let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        hash[edge[0]].push(edge[1]);
        hash[edge[1]].push(edge[0]);
    }
    
    // remove leaves via BFS
    let leaves = [];
    let res = [];
    for (let i = 0; i < n; i++) {
        if (hash[i].length === 1) {
            leaves.push(i);
        }
    }
    
    let count = n;
    while (count > 2) {
        let size = leaves.length;
        count -= size;
        let newLeaves = [];
        for (let i = 0; i < size; i++) {
            let node = leaves.shift();
            let nextNodes = hash[node];
            for (let j = 0; j < nextNodes.length; j++) {
                let nextNode = nextNodes[j];
                let index = hash[nextNode].indexOf(node);
                hash[nextNode].splice(index, 1);
                if (hash[nextNode].length === 1) {
                    newLeaves.push(nextNode);
                }
            }
        }
        leaves = newLeaves;
    }
    
    return leaves;
};