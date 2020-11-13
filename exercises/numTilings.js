/*
We have two types of tiles: a 2x1 domino shape, and an "L" tromino shape. These shapes may be rotated.

XX  <- domino

XX  <- "L" tromino
X
Given N, how many ways are there to tile a 2 x N board? Return your answer modulo 10^9 + 7.

(In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.)

Example:
Input: 3
Output: 5
Explanation: 
The five different ways are listed below, different letters indicates different tiles:
XYZ XXZ XYY XXY XYY
XYZ YYZ XZZ XYY XXY
Note:

N  will be in range [1, 1000].
 
*/
var numTilings = function(N) {
    let mod=1e9+7;
    let dp=Array.from({length:N+1}, x=>[0,0]);
    dp[1][0]=1;
    dp[1][1]=0;
    if(N>1) dp[2][0]=dp[2][1]=2;
    for(let i=3; i<=N; i++){
        dp[i][0]=(dp[i-2][0]+dp[i-1][1]+dp[i-1][0])%mod;
        dp[i][1]=(dp[i-2][0]*2+dp[i-1][1])%mod;
    }
    return dp[N][0];
};