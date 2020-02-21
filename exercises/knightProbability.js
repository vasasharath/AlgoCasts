/*
On an NxN chessboard, a knight starts at the r-th row and c-th column and attempts to make exactly K moves. The rows and columns are 0 indexed, so the top-left square is (0, 0), and the bottom-right square is (N-1, N-1).

A chess knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.

 



 

Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.

The knight continues moving until it has made exactly K moves or has moved off the chessboard. Return the probability that the knight remains on the board after it has stopped moving.

 

Example:

Input: 3, 2, 0, 0
Output: 0.0625
Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
From each of those positions, there are also two moves that will keep the knight on the board.
The total probability the knight stays on the board is 0.0625.
 

Note:

N will be between 1 and 25.
K will be between 0 and 100.
The knight always initially starts on the board.
*/
var knightProbability = function(N, K, r, c) {
    const dp = new Array(N);
    const movesR = [2,2,-2,-2,1,1,-1,-1];
    const movesC = [1,-1,1,-1,2,-2,2,-2]; 
    
    for(let col = 0; col < dp.length; col++) {
        dp[col] = new Array(N);
        for(let k = 0; k < dp[col].length; k++) {
            dp[col][k] = [1]; // 0 move has 100% of staying on the board
        }
    }
    
    for(let s = 1; s < K + 1; s++) {
        for(let i = 0; i < N; i++) {
            for(let j = 0; j < N; j++) {
                let probability = 0.0;
                for(let m = 0; m < 8; m++) {
                    const nextRow = i + movesR[m];
                    const nextCol = j + movesC[m];
                    if(nextRow >= 0 && nextRow < N && nextCol >= 0 && nextCol < N) {
                        probability += dp[nextRow][nextCol][s-1]/8.0; // % of chance out of 8 moves
                    }
                }
                dp[i][j][s] = probability;
            }
        }
    }
    
    return dp[r][c][K];
};