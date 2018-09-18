/*
Given an integer, write a function to determine if it is a power of three.

Example 1:

Input: 27
Output: true
Example 2:

Input: 0
Output: false
Example 3:

Input: 9
Output: true
Example 4:

Input: 45
Output: false
Follow up:
Could you do it without using any loop / recursion?
*/
var isPowerOfThree = function(n) {
    while (n >= 3) {
        if (n % 3 !== 0) {
            break;
        }
        
        n = n / 3;
    }
    
    return n === 1;
};

var isPowerOfThree = function(n) {
    return (Math.log10(n) / Math.log10(3)) == parseInt(Math.log10(n) / Math.log10(3));
};


