/*
Given a string, determine if a permutation of the string could form a palindrome.

Example 1:

Input: "code"
Output: false
Example 2:

Input: "aab"
Output: true
Example 3:

Input: "carerac"
Output: true
*/
var canPermutePalindrome = function(s) {
   var result = 0;
    var map = {};
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] === undefined){
            map[s[i]] = 1;
            result++;
        }
        else if(map[s[i]] === 1){
            map[s[i]] = 0;
            result--;
        }
        else if(map[s[i]] === 0){
            map[s[i]] = 1;
            result++;
        }
    }
    if(result <= 1) return true;
    else return false;
};