/*
Given an array of unique integers, each integer is strictly greater than 1.

We make a binary tree using these integers and each number may be used for any number of times.

Each non-leaf node's value should be equal to the product of the values of it's children.

How many binary trees can we make?  Return the answer modulo 10 ** 9 + 7.

Example 1:

Input: A = [2, 4]
Output: 3
Explanation: We can make these trees: [2], [4], [4, 2, 2]
Example 2:

Input: A = [2, 4, 5, 10]
Output: 7
Explanation: We can make these trees: [2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2].
 

Note:

1 <= A.length <= 1000.
2 <= A[i] <= 10 ^ 9.
*/
var numFactoredBinaryTrees = function(A) {
  A.sort((a, b) => a - b);
  let cnt = 0;
  const MOD = Math.pow(10, 9) + 7;
  const cache = {};
  const set = new Set(A);
  const _ = n => {
    if (n in cache) return cache[n];
    let c = 1;
    const tmp = new Set();
    for (let i = 0; i < A.length; ++i) {
      if (A[i] >= n) break;
      if (tmp.has(A[i])) continue;
      if (n % A[i] === 0 && set.has(A[i]) && set.has(n / A[i])) {
        c += _(A[i]) * _(n / A[i]) * (A[i] * A[i] === n ? 1 : 2);
        c %= MOD;
        tmp.add(A[i]);
        tmp.add(n / A[i]);
      }
    }

    return (cache[n] = c);
  };

  for (const n of A) {
    cnt += _(n);
    cnt %= MOD;
  }
  return cnt;
};