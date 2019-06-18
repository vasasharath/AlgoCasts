/*
Given two strings s1, s2, find the lowest ASCII sum of deleted characters to make two strings equal.

Example 1:
Input: s1 = "sea", s2 = "eat"
Output: 231
Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
Deleting "t" from "eat" adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
Example 2:
Input: s1 = "delete", s2 = "leet"
Output: 403
Explanation: Deleting "dee" from "delete" to turn the string into "let",
adds 100[d]+101[e]+101[e] to the sum.  Deleting "e" from "leet" adds 101[e] to the sum.
At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.
Note:

0 < s1.length, s2.length <= 1000.
All elements of each string will have an ASCII value in [97, 122].
*/
var minimumDeleteSum = function(s1, s2) {
     const dp = new Array(s2.length + 1);
    for(let i = 0; i < dp.length; i++) {
        dp[i] = new Array(s1.length+1).fill(0)
    }
    
    for(let row = 1; row < dp.length; row++) {
        dp[row][0] = s2.charCodeAt(row-1) + dp[row-1][0];
    } 
    
    for(let col = 1; col < dp[0].length; col++) {
        dp[0][col] = s1.charCodeAt(col-1) + dp[0][col-1];
    } 

    for(let i = 1; i < dp.length; i++) {
        for(let j = 1; j < dp[i].length; j++) {
            if(s1[j-1] === s2[i-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else if(s1[j-1] !== s2[i-1]) {
                dp[i][j] = Math.min(dp[i][j-1] + s1.charCodeAt(j-1), dp[i-1][j] + s2.charCodeAt(i-1));
            }   
        }    
    }

    return dp[dp.length-1][dp[0].length-1];
};