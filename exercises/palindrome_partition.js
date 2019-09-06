/*
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]
*/
var partition = function(s) {
    if (!s) {
        return []; 
    }   

    let result = []; 

    function dfs(s, tmpArr, start) {
        if (start == s.length) {
            result.push(tmpArr.slice());
            return;
        }   

        for (let i = start; i < s.length; i++) {
            if (isPalindrome(s, start, i)) {
                tmpArr.push(s.substring(start, i + 1));
                dfs(s, tmpArr, i + 1); 
                tmpArr.pop();
            }   
        }   
    }   

    function isPalindrome(s, left, right) {
        while(left < right) {
            if (s[left++] != s[right--]) {
                return false;
            }   
        }   

        return true;
    }   

    dfs(s, [], 0); 

    return result;
};