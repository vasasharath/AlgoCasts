/*
Given a string S of digits, such as S = "123456579", we can split it into a Fibonacci-like sequence [123, 456, 579].

Formally, a Fibonacci-like sequence is a list F of non-negative integers such that:

0 <= F[i] <= 2^31 - 1, (that is, each integer fits a 32-bit signed integer type);
F.length >= 3;
and F[i] + F[i+1] = F[i+2] for all 0 <= i < F.length - 2.
Also, note that when splitting the string into pieces, each piece must not have extra leading zeroes, except if the piece is the number 0 itself.

Return any Fibonacci-like sequence split from S, or return [] if it cannot be done.

Example 1:

Input: "123456579"
Output: [123,456,579]
Example 2:

Input: "11235813"
Output: [1,1,2,3,5,8,13]
Example 3:

Input: "112358130"
Output: []
Explanation: The task is impossible.
Example 4:

Input: "0123"
Output: []
Explanation: Leading zeroes are not allowed, so "01", "2", "3" is not valid.
Example 5:

Input: "1101111"
Output: [110, 1, 111]
Explanation: The output [11, 0, 11, 11] would also be accepted.
Note:

1 <= S.length <= 200
S contains only digits.
*/
var isTrueArray = function(array, string) {
    var len = string.length;
    if(len===0) return array;
    var pre = array[1]-array[0];
    var preLen = String(pre).length;
    if(string.substring(len-preLen) == pre) {
        array.unshift(pre);
        string = string.substring(0, len-preLen);
        return isTrueArray(array, string);
    } else return []
    
}
var splitIntoFibonacci = function(S) {
    var number = [];
    var len = S.length;
    for (var j = 1; j <= (S.length/3)+1; j++) {
        if(S.substring(len-j) > 2147483647) return [];
        for(var i = 1; i <= j; i++) {
            var subNum = S.substring(len-j) - S.substring(len-j-i,len-j);
            for(var m = 1; m <= j; m++) {
                var isOk =  S.charAt(len-j-i-m) !== '0' && S.substring(len-j-i-m,len-j-i).length >1;
                if(subNum == S.substring(len-j-i-m,len-j-i) && (isOk || S.substring(len-j-i-m,len-j-i).length <=1)) {
                    var array = [];
                    array[0] = S.substring(len-j-i-m,len-j-i);
                    array[1] = S.substring(len-j-i,len-j);
                    array[2] = S.substring(len-j);
                    number = isTrueArray(array, S.substring(0, len-j-i-m));
                    if(number.length) return number;
                }
            }
        }
    }
    return number;
};