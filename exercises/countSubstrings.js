/*
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
 

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

Note:

The input string length won't exceed 1000.
*/
var countSubstrings = function(s) {
   let n = s.length 
    let cnt = 0
    // check for palindromes centered at `center` - 
	// increment through the string
    for( let center = 0; center < n; center++ ) {
        // Center is the character at s[center], 
        // but also between s[center] and s[center+1]
        for ( let offset=0; offset < 2; offset++){
            let l = center 
            let r = center + offset
            // Just expand from the center on both sides until we no longer
            // have a palindrome
            while( l >= 0 && r < n && s[l]===s[r] ) {
                cnt++
                l--
                r++
            }
        }
    }
    return cnt
};