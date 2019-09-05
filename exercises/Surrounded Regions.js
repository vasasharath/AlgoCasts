/*
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. 
Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. 
Two cells are connected if they are adjacent cells connected horizontally or vertically.
*/
var solve = function(board) {
    if(board.length<=0||board[0].length<=0)
        return;
    let allN1 = function(i,j){
        if(i<0||j<0||i>=board.length||j>=board[i].length||board[i][j]!='O')
            return;
        board[i][j]='1';
        allN1(i+1,j);
        allN1(i-1,j);
        allN1(i,j+1);
        allN1(i,j-1);
        //4 neighbours
    };
    
    //4 corners 
    for(let j=0;j<board[0].length;j++){
        if(board[0][j]=='O')
            allN1(0,j);
    }
    for(let j=0;j<board.length;j++){
        if(board[j][0]=='O')
            allN1(j,0);
    }
    for(let j=0;j<board[0].length;j++){
        if(board[board.length-1][j]=='O')
            allN1(board.length-1,j);
    }
    for(let j=0;j<board.length;j++){
        if(board[j][board[j].length-1]=='O')
            allN1(j,board[j].length-1);
    }
    
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j]=='O')
                board[i][j]='X';
            else if(board[i][j]=='1')
                board[i][j]='O';
        }
    }
};