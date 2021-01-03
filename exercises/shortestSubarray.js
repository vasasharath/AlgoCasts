/*
Return the length of the shortest, non-empty, contiguous subarray of A with sum at least K.

If there is no non-empty subarray with sum at least K, return -1.

 

Example 1:

Input: A = [1], K = 1
Output: 1
Example 2:

Input: A = [1,2], K = 4
Output: -1
Example 3:

Input: A = [2,-1,2], K = 3
Output: 3
 

Note:

1 <= A.length <= 50000
-10 ^ 5 <= A[i] <= 10 ^ 5
1 <= K <= 10 ^ 9
*/
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function(A, K) {
     let n = A.length;
    let min = n+1;
    let B = new Array(n+1).fill(0);
    for(let i=0; i<n; i++) B[i+1] = B[i] + A[i];
    let stack = [];
    for(let i=0; i<n+1; i++){
        while(stack.length > 0 && B[i]-B[stack[0]] >= K){
            min = Math.min(min, i-stack[0]);
            stack.shift();
        }
        while(stack.length > 0 && B[i] <= B[stack[stack.length-1]]){
            stack.pop();
        }
        stack.push(i);
    }
    return min <= n ? min : -1;
};