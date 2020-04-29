/*
You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

Example: 

Given the 2D grid:

INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF
After running your function, the 2D grid should be:

  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4
*/
var wallsAndGates = function(rooms) {
    if(rooms == null || rooms.length ==0 || rooms[0].length ==0) return; 
    var q=[];
    var m=rooms.length;
    var n=rooms[0].length;
    for(var i=0; i<m; i++){
        for(var j=0; j<n; j++){
            if(rooms[i][j] == 0){
                q.push([i, j]);
            }
        }
    }
    var DX=[0,1,-1,0];
    var DY=[1,0,0,-1];
    while(q.length){
        var curr=q.shift();
        for(var i=0; i<4; i++){
            var x=curr[0]+DX[i];
            var y=curr[1]+DY[i];
            if(x>=0 && y<n && x<m && y>=0 && rooms[x][y] === (Math.pow(2, 31)-1)){
                q.push([x,y]);
                rooms[x][y]= rooms[curr[0]][curr[1]]+1;
            }
        }
    }
};