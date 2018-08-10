/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g,"");
    let rev = s.split("").reverse().join("");
    return rev === s;
};
