/*
Given an array of citations (each citation is a non-negative integer) of a researcher, 
write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her 
N papers have at least h citations each, and the other N − h papers have no more than h citations each."

Example:

Input: citations = [3,0,6,1,5]
Output: 3 
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had 
             received 3, 0, 6, 1, 5 citations respectively. 
             Since the researcher has 3 papers with at least 3 citations each and the remaining 
             two with no more than 3 citations each, her h-index is 3.
Note: If there are several possible values for h, the maximum one is taken as the h-index.
*/
var hIndex = function(citations) {
   const N = citations.length
  let bucket = Array.from({length: N+1}).map(n => 0)
  citations.forEach(n => {
    bucket[Math.min(n, N)]++
  })
  let count = 0
  for (let h = N; h >= 0; h--) {
    count += bucket[h]
    if (count >= h) return h
  }
};