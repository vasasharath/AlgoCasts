/*
Equations are given in the format A / B = k, where A and B are variables represented as strings, 
and k is a real number (floating point number). Given some queries, return the answers. If the answer does not exist, return -1.0.

Example:
Given a / b = 2.0, b / c = 3.0.
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
return [6.0, 0.5, -1.0, 1.0, -1.0 ].

The input is: vector<pair<string, string>> equations, vector<double>& values, 
vector<pair<string, string>> queries , where equations.size() == values.size(), and the values are positive. 
This represents the equations. Return vector<double>.

According to the example above:

equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 
 

The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.
*/
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const buildGraph = function(equations, values) {
    let graph = new Map();
    
    equations.forEach((eq, index) => {
        let [a, b] = eq;
        if (!graph.has(a)) {
            graph.set(a, []);
        }
        
        graph.get(a).push([b, values[index]]);
        if (!graph.has(b)) {
            graph.set(b, []);
        }
        graph.get(b).push([a, 1 / values[index]]);
    });
    
    return graph;
}
var calcEquation = function(equations, values, queries) {
    let graph = buildGraph(equations, values);
    
    let res = [];
    const dfs = function(visited, node, end) {
        if (!graph.has(node)) {
            return -Infinity;
        }
        if (node === end) {
            return 1;
        }
        visited.add(node);
    
        for (let i = 0; i < graph.get(node).length; i++) {
            let [nei, weight] = graph.get(node)[i];
            
            if (!visited.has(nei)) {
                let val = weight * dfs(visited, nei, end);
                if (val !== -Infinity) {
                    return val;
                }
            }
        }
    
            
        return -Infinity;
    }
    for (let i = 0; i < queries.length; i++) {
        let [start, end] = queries[i];
        let visited = new Set();
        let value = dfs(visited, start, end); 
        res.push(value === -Infinity ? -1:value);
    }
    
    return res;
};