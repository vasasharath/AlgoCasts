/*
Given a positive integer a, find the smallest positive integer b whose multiplication of each digit equals to a.

If there is no answer or the answer is not fit in 32-bit signed integer, then return 0.

Example 1
Input:

48 
Output:
68
Example 2
Input:

15
Output:
35
*/
var smallestFactorization = function(a) {
    if(a<2)return a;
    let MAX_INT = 2147483647, res= 0, mul=1;
    for(let i=9; i>=2; i--){
        while(a %i===0){
             a /= i;
             res= mul * i + res;
             mul *= 10 ;
        }
    }
    return a < 2 && res <= MAX_INT ? res: 0;
};