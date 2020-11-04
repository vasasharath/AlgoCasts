/*
On a 2x3 board, there are 5 tiles represented by the integers 1 through 5, and an empty square represented by 0.

A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.

The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].

Given a puzzle board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.

Examples:

Input: board = [[1,2,3],[4,0,5]]
Output: 1
Explanation: Swap the 0 and the 5 in one move.
Input: board = [[1,2,3],[5,4,0]]
Output: -1
Explanation: No number of moves will make the board solved.
Input: board = [[4,1,2],[5,0,3]]
Output: 5
Explanation: 5 is the smallest number of moves that solves the board.
An example path:
After move 0: [[4,1,2],[5,0,3]]
After move 1: [[4,1,2],[0,5,3]]
After move 2: [[0,1,2],[4,5,3]]
After move 3: [[1,0,2],[4,5,3]]
After move 4: [[1,2,0],[4,5,3]]
After move 5: [[1,2,3],[4,5,0]]
Input: board = [[3,2,4],[1,5,0]]
Output: 14
Note:

board will be a 2 x 3 array as described above.
board[i][j] will be a permutation of [0, 1, 2, 3, 4, 5].
*/
var slidingPuzzle = function(board) {
    const rows = 2, cols = 3;
    const target = "123450";
    const curr = stringifyBoard(board);
    if (curr ===  target) return 0;
    const queue = [], visited = {};
    let steps = 0;
    queue.push(curr);
    visited[curr] = true;
    const directX = [-1, 1, 0, 0];
    const directY = [0, 0, -1, 1];
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const curr = queue.shift();
            if (curr === target) return steps;
            const idx = curr.indexOf('0');
            const currx = Math.floor(idx / cols);
            const curry = idx % cols;
            for (let j = 0; j < directX.length; j++) {
                const nx = currx + directX[j];
                const ny = curry + directY[j];
                if (!isValid(nx, ny, rows, cols)) continue;
                const nidx = nx * cols + ny;
                const next = swapChar(curr, idx, nidx);
                
                if (visited[next]) continue;
                visited[next] = true;
                queue.push(next);
            }
        }
        steps++;
    }
    return -1;
};

var stringifyBoard = function (board) {
    let str = "";
    for (let row of board) {
        for (let col of row) {
            str += col;
        }
    }
    return str;
}

var isValid = function (x, y, rows, cols) {
    return x >= 0 && x < rows && y >= 0 && y < cols;
}

var swapChar = function (s, i, j) {
    let min = Math.min(i,j);
    let max = Math.max(i,j);
    return s.substring(0, min) + s[max] + s.substring(min + 1, max) + s[min] + s.substring(max + 1);
}