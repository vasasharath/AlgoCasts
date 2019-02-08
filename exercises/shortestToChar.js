/*
Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.
*/
var shortestToChar = function(S, C) {
    let out = new Array(S.length);
    let distance = 90000;
    
    for (let i=0; i<S.length; i++) {
        if ( S[i] === C ) {
            out[i] = 0;
            distance = 1;

            for(let j=i-1; j>=0; j--) {
                if ( out[j]>distance ) {
                    out[j] = distance++;
                } else {
                    break;
                }
            }
            
            distance = 1;
        } else {
            out[i] = distance++;
        }
    }
    
    return out;
};