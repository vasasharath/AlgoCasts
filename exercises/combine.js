/*
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/
var combine = function(n, k) {
     if(k > n) return [];
  let result = [], tmp = new Array(k);
  for(let i = 0; i < k; i++) {tmp[i] = i+1;}

  let curr = k - 1, flag = 0;
  while(curr > -1) {
    if(!flag) result.push(tmp.slice());
    if(tmp[curr] + k - curr > n) {
      curr--;
      flag = 1;
    } else if(flag) {
      tmp[curr++]++;
      while(curr < k) {
        tmp[curr] = tmp[curr-1] + 1;
        curr++;
      }
      curr--;
      flag = 0;
    } else tmp[curr]++;
  }
  return result;
};