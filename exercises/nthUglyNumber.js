/*
Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 

Example:

Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
Note:  

1 is typically treated as an ugly number.
n does not exceed 1690.
*/
const cache = [0, 1];
const helper = n => {
  const mul = [2, 3, 5];
  const indexes = [1, 1, 1];
  for (let i = 2; i <= n; ++i) {
    const a0 = mul[0] * cache[indexes[0]];
    const a1 = mul[1] * cache[indexes[1]];
    const a2 = mul[2] * cache[indexes[2]];
    const min = Math.min(a0, a1, a2);
    min === a0 && ++indexes[0];
    min === a1 && ++indexes[1];
    min === a2 && ++indexes[2];
    cache[i] = min;
  }
};
helper(1690);
const nthUglyNumber = n => cache[n];