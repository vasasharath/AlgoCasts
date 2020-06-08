/*
Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

Example 1:

Input: 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.
Example 2:

Input: 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
*/
const map = {}
const integerBreak = function (n) {
  
  const aux = (x) => {
    if (map[x] !== undefined) {
      return map[x]
    }
    if (n === 1) {
      return 1
    }
    let max = 1
    for (let i = 2; i < x; i++) {
      max = Math.max(
        max,
        Math.max(aux(i), i) * Math.max(x - i, aux(x - i)),
      )
    }
    map[x] = max
    return max
  }
  return aux(n)
}