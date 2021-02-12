/*
In an array A of 0s and 1s, how many non-empty subarrays have sum S?

 

Example 1:

Input: A = [1,0,1,0,1], S = 2
Output: 4
Explanation: 
The 4 subarrays are bolded below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
 

Note:

A.length <= 30000
0 <= S <= A.length
A[i] is either 0 or 1.
*/
const numSubarraysWithSum = (A, S) => {
    const sumCountsBySum = new Array(A.length + 1).fill(0);
    let currentSum = 0;
    return A.reduce((count, n) => {
        ++sumCountsBySum[currentSum];
        currentSum += n;
        const compliment = currentSum - S;
        if (compliment > -1) count += sumCountsBySum[compliment];
        return count;
    }, 0);
};