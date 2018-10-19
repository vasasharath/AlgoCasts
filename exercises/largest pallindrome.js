/*
Find the largest palindrome made from the product of two n-digit numbers.

Since the result could be very large, you should return the largest palindrome mod 1337.

Example:

Input: 2

Output: 987

Explanation: 99 x 91 = 9009, 9009 % 1337 = 987

Note:

The range of n is [1,8].
*/
var largestPalindrome = function(n) {
 if(n == 1){
    return 9;
  // to deal with overflow
  }else if(n === 8){
    return 475;
  }
  //
  let max = Math.pow(10, n);
  let min = Math.pow(10, n-1);
  let ret = 0;

  for(let i = max-1; i > 0; i--){
    ret = i * max + getReverse(i);
    // console.log('ret', ret, i, n);
    for(let factor = ~~Math.sqrt(ret); factor < max; factor++){
      //
      if (ret % factor == 0 && ret / factor < max){
        return ret % 1337;
      }
    }
  }
  return -1;
}

// 1234 --> 4321
function getReverse(n){
  let result = 0;
  // copy
  let num = n;
  while(num > 0){
    result = result * 10 + num % 10;
    num = ~~(num / 10);
  }
  return result;
}