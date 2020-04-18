/*
There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

Example 1:

Input:
[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]

Output: "wertf"
Example 2:

Input:
[
  "z",
  "x"
]

Output: "zx"
Example 3:

Input:
[
  "z",
  "x",
  "z"
] 

Output: "" 

Explanation: The order is invalid, so return "".
Note:

You may assume all letters are in lowercase.
If the order is invalid, return an empty string.
There may be multiple valid order of letters, return any one of them is fine.
*/
var alienOrder = function(words) {
    var graph = {};
    words.forEach(w => w.split('').forEach(ch => {
        if(!graph[ch]){
            graph[ch] = new Set();
        }
    }));
    for(let j=0; j< (words.length-1);j++){
        const prev = words[j];
        const curr = words[j+1];
        let flag = true;
        for (var i = 0; i < Math.min(prev.length, curr.length); i++) {
            if (prev[i] !== curr[i]) {
                flag = false;
                graph[prev[i]].add(curr[i]);
                break;
            }
        }
        if(flag && prev.length>curr.length){
            return "";
        }
    }

    var marked = {}, visited = {};
    var str = '';
    var hasCycle = false;
    
    Object.keys(graph).map(visit);
    return hasCycle ? '' : str;
    
    function visit(n) {
        if (marked[n]) return;
        
        if (visited[n]) {
            hasCycle = true;
            return;
        }
        
        visited[n] = true;
        graph[n].forEach(visit);
        marked[n] = true;
        str = n + str;
    }

};