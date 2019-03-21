/*
Given an array A of positive lengths, return the largest perimeter of a triangle with non-zero area, formed from 3 of these lengths.

If it is impossible to form any triangle of non-zero area, return 0.

 

Example 1:

Input: [2,1,2]
Output: 5
Example 2:

Input: [1,2,1]
Output: 0
Example 3:

Input: [3,2,3,4]
Output: 10
Example 4:

Input: [3,6,2,3]
Output: 8
 

Note:

3 <= A.length <= 10000
1 <= A[i] <= 10^6
*/
var largestPerimeter = function(A) {
     A.sort((a,b) => a-b);
    for (let j = A.length-1; j > 1; j--) {
        if (A[j] < A[j-1] + A[j-2]) {
            return A[j]+A[j-1]+A[j-2];
        }
    }
    return 0;
};