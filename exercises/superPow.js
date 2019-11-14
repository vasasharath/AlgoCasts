/*
Your task is to calculate ab mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.

Example 1:

Input: a = 2, b = [3]
Output: 8
Example 2:

Input: a = 2, b = [1,0]
Output: 1024
*/
var MOD = 1337;
var superPow = function(a, b) {
    var result = 1;
    for(var i=b.length-1; i>=0; i--){
        result = powWithDiv(a%MOD, b[i]) * result % MOD;
        a = powWithDiv(a%MOD, 10);
    }
    return result;
};

function powWithDiv(a, pow){
    var result = 1;
    for(var i=0; i<pow; i++) result = result * a % MOD;
    return result;
}