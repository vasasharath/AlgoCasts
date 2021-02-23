/*
Given a non-empty array of unique positive integers A, consider the following graph:

There are A.length nodes, labelled A[0] to A[A.length - 1];
There is an edge between A[i] and A[j] if and only if A[i] and A[j] share a common factor greater than 1.
Return the size of the largest connected component in the graph.

 

Example 1:

Input: [4,6,15,35]
Output: 4

Example 2:

Input: [20,50,9,63]
Output: 2

Example 3:

Input: [2,3,6,7,4,12,21,39]
Output: 8

Note:

1 <= A.length <= 20000
1 <= A[i] <= 100000
*/
var largestComponentSize = function(A) {
    const p = []
    for(let num of A) {
        const set = getFactors(num)  // get the set of all the factors
        for(let factor of set.values()) {  
            p[find(factor)] = find(num) // union the number with all the factors
        }
    }
    
    const cntMap = new Map()
    for(let num of A) {   // for all the input numbers, count the related numbers via their parents 
        const parent = find(num)
        cntMap.set(parent, (cntMap.get(parent) || 0) + 1) 
    }
    return Math.max(...cntMap.values())
    
    function find(a) {
        if(!p[a]) p[a] = a
        while(p[a] !== a) {
            p[a] = p[p[a]]
            a = p[a]
        }
        return a
    }
    
    function getFactors(number) {
        const res = new Set()  // use set to guarantee no duplicates, no need to add number itself here. 
        for (let i = 2; i * i <= number; i++) { 
            if (number % i === 0) {
                res.add(i)
                res.add(number / i)
            }
        }
        return res
    }
};