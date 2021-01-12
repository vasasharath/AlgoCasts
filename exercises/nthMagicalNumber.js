/*
A positive integer is magical if it is divisible by either a or b.

Given the three integers n, a, and b, return the nth magical number. Since the answer may be very large, return it modulo 109 + 7.

 

Example 1:

Input: n = 1, a = 2, b = 3
Output: 2
Example 2:

Input: n = 4, a = 2, b = 3
Output: 6
Example 3:

Input: n = 5, a = 2, b = 4
Output: 10
Example 4:

Input: n = 3, a = 6, b = 4
Output: 8
 

Constraints:

1 <= n <= 109
2 <= a, b <= 4 * 104
*/
var nthMagicalNumber = function(N, A, B) {
    var temp;
    if(B > A){
        temp = A;
        A = B;
        B = temp;
    }
    //A is bigger
    
    var shareFreq = ((A+B)/GCD(A,B))-1;
    var numShares = Math.floor(N/shareFreq);
    var superN = N + numShares;
    
    //X+Y = superN
    
    var X = Math.ceil(superN*B/(A+B));
    var Y = Math.ceil(superN-(superN*B/(A+B)));
    
    var mod = (10**9)+7;
    
    if(X*A <= Y*B)return (X*A)%mod;
    else return (Y*B)%mod;
};

var GCD = function(x,y){
    while(y!=0){
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}