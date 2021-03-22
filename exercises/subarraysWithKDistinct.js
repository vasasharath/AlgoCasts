/*
Given an array A of positive integers, call a (contiguous, not necessarily distinct) subarray of A good if the number of different integers in that subarray is exactly K.

(For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.)

Return the number of good subarrays of A.

 

Example 1:

Input: A = [1,2,1,2,3], K = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].
Example 2:

Input: A = [1,2,1,3,4], K = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
 

Note:

1 <= A.length <= 20000
1 <= A[i] <= A.length
1 <= K <= A.length
*/
function subarraysWithKDistinct(A, K) {
  function atMostK(k) {
    let l = 0;
    let res = 0;
    const count = {};

    for (let r = 0; r < A.length; r++) {
      if (count[A[r]] == null) count[A[r]] = 0;
      if (count[A[r]] === 0) k--;
      count[A[r]]++;

      while (k < 0) {
        count[A[l]]--;
        if (count[A[l]] === 0) k++;
        l++;
      }
      res += r - l + 1;
    }
    return res;
  }

  return atMostK(K) - atMostK(K - 1);
}