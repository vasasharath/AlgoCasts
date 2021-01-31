/*
Given an array A of integers, for each integer A[i] we need to choose either x = -K or x = K, and add x to A[i] (only once).

After this process, we have some array B.

Return the smallest possible difference between the maximum value of B and the minimum value of B.

 

Example 1:

Input: A = [1], K = 0
Output: 0
Explanation: B = [1]
Example 2:

Input: A = [0,10], K = 2
Output: 6
Explanation: B = [2,8]
Example 3:

Input: A = [1,3,6], K = 3
Output: 3
Explanation: B = [4,6,3]
 

Note:

1 <= A.length <= 10000
0 <= A[i] <= 10000
0 <= K <= 10000
*/
var smallestRangeII = function(A, K) {


    A.sort((a,b)=> a-b);

    let max = -Infinity;
    let min = Infinity;
    let n = A.length-1

    let res = A[n] -A[0];

    for(let i=0; i < n; i++){
        max = Math.max(A[i]+K , A[n]-K);
        min = Math.min(A[i+1]-K, A[0]+K)
        res = Math.min(res, max-min)
    }

    return res
};