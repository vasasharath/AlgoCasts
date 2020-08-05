/*
Given integers n and k, find the lexicographically k-th smallest integer in the range from 1 to n.

Note: 1 ≤ k ≤ n ≤ 109.

Example:

Input:
n: 13   k: 2

Output:
10

Explanation:
The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    if (n < k || k < 1) return 0;
    else if (n < 10) return k;
    let cur = 1;
    --k;
    while (k > 0) {
      let  step = 0, first = cur, last = cur + 1;
      while (first <= n) {
        step += Math.min(n + 1, last) - first;
        first *= 10;
        last *= 10;
      }
   
      if (step <= k) {
        ++cur;
        k -= step;
      } else {
        cur *= 10;
        --k;
      }
    }
    return cur;
};