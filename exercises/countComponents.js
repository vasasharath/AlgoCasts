/*
Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.

Example 1:

Input: n = 5 and edges = [[0, 1], [1, 2], [3, 4]]

     0          3
     |          |
     1 --- 2    4 

Output: 2
Example 2:

Input: n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]]

     0           4
     |           |
     1 --- 2 --- 3

Output:  1
Note:
You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.
*/
var countComponents = function(n, edges) {
    const adjList = constructAdjacencyList(n, edges)
    const visited = {}
    let count = 0
    
    for (let i = 0; i<n; i++) {
        if (!visited[i]) {
            count++
            dfs(i, adjList, visited)
        }
    }
    return count
};

function dfs(v, adjList, visited) {
    if (v in visited) return
    visited[v] = true
    const neighbors = adjList[v]
    for (let i = 0; i<neighbors.length; i++) {
        dfs(neighbors[i], adjList, visited)
    }
}

function constructAdjacencyList(n, edges) {
    const adjList = new Array(n)
    for (let i = 0; i<n; i++) {
        adjList[i] = []
    }
    for (let i = 0; i<edges.length; i++) {
        const edge1 = edges[i][0]
        const edge2 = edges[i][1]
        adjList[edge1].push(edge2)
        adjList[edge2].push(edge1)
    }
    return adjList
}