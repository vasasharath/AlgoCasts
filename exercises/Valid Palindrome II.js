/*
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
*/
var validPalindrome = function(s) {
    var l = 0;
    var r = s.length - 1;
    
    while (l <= r) {
        if (s[l] === s[r]) {
            l ++;
            r --;
        } else return isPalindrome(s, l+1, r) || isPalindrome(s, l, r-1);
    }
    return true;
};

var isPalindrome = function(str, l, r) {
    while (l <= r) {
        if (str[l] === str[r]) {
            l ++;
            r --;
        } else return false;
    }
    return true;
}