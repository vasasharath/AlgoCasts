/*
Given a string s, you are allowed to convert it to a palindrome by adding characters in front of it. 
Find and return the shortest palindrome you can find by performing this transformation.

Example 1:

Input: "aacecaaa"
Output: "aaacecaaa"
Example 2:

Input: "abcd"
Output: "dcbabcd"
*/
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    let f = new Array(s.length);
    f[0] = 0;
    let rev = s.split('').reverse().join('');
    let s_new = s + '#' + rev;
    let n_new = s_new.length,n = s.length;
    for (let i = 1; i < n_new; i++) {
        let t = f[i - 1];
        while (t > 0 && s_new[i] != s_new[t])
            t = f[t - 1];
        if (s_new[i] == s_new[t])
            ++t;
        f[i] = t;
    }
    return rev.substring(0, n - f[n_new - 1]) + s;
};