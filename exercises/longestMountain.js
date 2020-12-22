/*
You may recall that an array arr is a mountain array if and only if:

arr.length >= 3
There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given an integer array arr, return the length of the longest subarray, which is a mountain. Return 0 if there is no mountain subarray.

 

Example 1:

Input: arr = [2,1,4,7,3,2,5]
Output: 5
Explanation: The largest mountain is [1,4,7,3,2] which has length 5.
Example 2:

Input: arr = [2,2,2]
Output: 0
Explanation: There is no mountain.
 

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 104
 

Follow up:

Can you solve it using only one pass?
Can you solve it in O(1) space?
*/
const longestMountain = A => {
  let ans = 0;
	
  // i is left boundary of the mountain
  // p is the index of the peak
  // j is the right boundary of the mountain
  for (let i = 0, j = 0, p = -1; j < A.length; j++) {
    if ((j === 0 || A[j] > A[j - 1]) && (j === A.length - 1 || A[j] > A[j + 1])) {
      // found a peak
      p = j;
    }

    if ((j === 0 || A[j] <= A[j - 1]) && (j === A.length - 1 || A[j] <= A[j + 1])) {
      // found a bottom
      if (p > 0) {
        // update the result
        ans = Math.max(ans, j - i + 1);
      }
      // reset the left boundary
      i = j;
      // reset the peak (going to search for a new peak)
      p = -1;
    }
  }

  return ans;
};