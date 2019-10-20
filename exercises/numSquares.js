/*
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
*/
var numSquares = function(n) {
    function isSquare(n){
      return (Math.sqrt(n) % 1 === 0) 
      
  }
  if(isSquare(n)){
      return 1
  }
    
  while((n & 3) === 0){
      n >>= 2
  }
  if((n&7) === 7) return 4

   let sqrt = Math.sqrt(n)

   for(let i = 1; i <=sqrt;i++){
       if(isSquare(n - i * i)){
           return 2
       }
   }
  return 3
};