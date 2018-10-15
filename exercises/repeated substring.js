/*
Given a non-empty string check if it can be constructed by taking a substring of it 
and appending multiple copies of the substring together. 
You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

 

Example 1:

Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.
Example 2:

Input: "aba"
Output: False
Example 3:

Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/
var repeatedSubstringPattern = function(str) {
     var len = str.length;
    var half = Math.floor(len / 2);

    for(var i = 1; i <= half; i ++){
        if(len % i !== 0){
            continue;
        }
        var cur = str.substr(0, i);
        var flag = true;
        for(var j = i; j <= len - i; j += i){
            if(str.substr(j, i) !== cur){
                flag = false;
                break;
            }
        }
        if(flag){
            return true;
        }
    }
    return false;
};