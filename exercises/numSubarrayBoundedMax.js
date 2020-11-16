/*
We are given an array A of positive integers, and two positive integers L and R (L <= R).

Return the number of (contiguous, non-empty) subarrays such that the value of the maximum array element in that subarray is at least L and at most R.

Example :
Input: 
A = [2, 1, 4, 3]
L = 2
R = 3
Output: 3
Explanation: There are three subarrays that meet the requirements: [2], [2, 1], [3].
Note:

L, R  and A[i] will be an integer in the range [0, 10^9].
The length of A will be in the range of [1, 50000].
*/
var numSubarrayBoundedMax = module.exports = function(A, L, R) {
    let prevHigh = -1, sum = 0, prev = 0;
     
    for(let i = 0; i < A.length; i++) {
        
        if(A[i] >= L && A[i] <= R) {
            prev = i - prevHigh;
        } else if(A[i] > R){
            prev = 0;
            prevHigh = i;
        }
        
        sum += prev;
    }
    
    return sum;
};