/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I'll tell you whether the number I picked is higher or lower.

However, when you guess a particular number x, and you guess wrong, you pay $x. You win the game when you guess the number I picked.

Example:

n = 10, I pick 8.

First round:  You guess 5, I tell you that it's higher. You pay $5.
Second round: You guess 7, I tell you that it's higher. You pay $7.
Third round:  You guess 9, I tell you that it's lower. You pay $9.

Game over. 8 is the number I picked.

You end up paying $5 + $7 + $9 = $21.
Given a particular n ≥ 1, find out how much money you need to have to guarantee a win.
*/
var getMoneyAmount = function(n) {
    var dp = [];
    var i, j,k, min;
    for(i=0; i<n+1; i++) {
        dp.push([]);
    }
    for(i=1; i<n+1; i++) {
        dp[i][i]=0;
    }
    for(i = n-1; i>=1; i--) {
        dp[i][i+1] = i;
        for(j=i+2; j<n+1; j++) {
            min = Math.min(i + dp[i+1][j], j+dp[i][j-1]);
            for(k=i+1;k<=j-1; k++) {
                min = Math.min(Math.max(dp[i][k-1],dp[k+1][j])+k, min);
            }
            dp[i][j] = min;
        }
    }
    return dp[1][n];
};