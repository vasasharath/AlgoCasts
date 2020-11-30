/*
We partition a row of numbers A into at most K adjacent (non-empty) groups, then our score is the sum of the average of each group. What is the largest score we can achieve?

Note that our partition must use every number in A, and that scores are not necessarily integers.

Example:
Input: 
A = [9,1,2,3,9]
K = 3
Output: 20
Explanation: 
The best choice is to partition A into [9], [1, 2, 3], [9]. The answer is 9 + (1 + 2 + 3) / 3 + 9 = 20.
We could have also partitioned A into [9, 1], [2], [3, 9], for example.
That partition would lead to a score of 5 + 2 + 6 = 13, which is worse.
 

Note:

1 <= A.length <= 100.
1 <= A[i] <= 10000.
1 <= K <= A.length.
Answers within 10^-6 of the correct answer will be accepted as correct.
*/
var largestSumOfAverages = function(A, K) {
    /*Initialise 2d dp Matrix*/
    let dp=new Array(K+1);
    for(let i=0;i<=K;i++)
    dp[i]=new Array(A.length+1).fill(0);
    
    let sum=new Array(A.length+1).fill(0);
    for(let i=1;i<=A.length;i++){
        sum[i]=A[i-1]+(sum[i-1]);//sum[1]=>A[0].. so on
        dp[1][i]=sum[i]/i;//Initialise first row 
    }
        
    for(let i=2;i<dp.length;i++){
        for(let j=1;j<dp[i].length;j++){
            for(let m=0;m<=j;m++)
                dp[i][j]=Math.max(dp[i][j],dp[i-1][m]+(((sum[j]-sum[m])/(j-m))||0));
        }
    }
    return dp[dp.length-1].pop();
};