/*
Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.
*/
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if(A.length !== B.length)
        return false;
    let prev = -1, curr = -1, count = 0,check = new Set();
    if(A === B ){
        for(let i = 0; i < A.length; i++){
            if (check.has(A[i]))
                return true;
            check.add(A[i]);
        }
                
        return false;
    }
        
    for(let i = 0; i < A.length; i++)
        {
            if(A[i] !== B[i]){
                // Count number of unmatched character
            count++;
 
            // If unmatched are greater than 2,
            // then return false
            if (count > 2)
                return false;
 
            // Store both unmatched characters of
            // both strings
            prev = curr;
            curr = i;
            }
        }
    // Check if previous unmatched of string1
    // is equal to curr unmatched of string2
    // and also check for curr unmatched character,
    // if both are same, then return true
    return (count === 2  && A[prev] === B[curr] && A[curr] === B[prev]);
};