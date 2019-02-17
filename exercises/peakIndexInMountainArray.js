/*
Let's call an array A a mountain if the following properties hold:

A.length >= 3
There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

Example 1:

Input: [0,1,0]
Output: 1
Example 2:

Input: [0,2,1,0]
Output: 1
Note:

3 <= A.length <= 10000
0 <= A[i] <= 10^6
A is a mountain, as defined above.
*/
var peakIndexInMountainArray = function(A) {
  function mid(a,b) {
    return Math.floor((b-a)/2);
  } 

  let left = 0, right = A.length-1; 
  let pivot = mid(left, right);

  while ( A[pivot-1]>A[pivot] || A[pivot]<A[pivot+1] ) {
    if(A[pivot]>A[pivot+1]) {
      right = pivot;
      pivot = mid(left, right)
    } else {
      left = pivot;
      pivot += mid(left, right)
    }
  }

  return pivot;
};