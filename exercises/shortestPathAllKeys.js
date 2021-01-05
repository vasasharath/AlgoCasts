/*
We are given a 2-dimensional grid. "." is an empty cell, "#" is a wall, "@" is the starting point, ("a", "b", ...) are keys, and ("A", "B", ...) are locks.

We start at the starting point, and one move consists of walking one space in one of the 4 cardinal directions.  We cannot walk outside the grid, or walk into a wall.  If we walk over a key, we pick it up.  We can't walk over a lock unless we have the corresponding key.

For some 1 <= K <= 6, there is exactly one lowercase and one uppercase letter of the first K letters of the English alphabet in the grid.  This means that there is exactly one key for each lock, and one lock for each key; and also that the letters used to represent the keys and locks were chosen in the same order as the English alphabet.

Return the lowest number of moves to acquire all keys.  If it's impossible, return -1.

 

Example 1:

Input: ["@.a.#","###.#","b.A.B"]
Output: 8
Example 2:

Input: ["@..aA","..B#.","....b"]
Output: 6
 

Note:

1 <= grid.length <= 30
1 <= grid[0].length <= 30
grid[i][j] contains only '.', '#', '@', 'a'-'f' and 'A'-'F'
The number of keys is in [1, 6].  Each key has a different letter and opens exactly one lock.
*/
var shortestPathAllKeys = function(grid) {
    var lastRowIndex = grid.length - 1;
    var lastColumnIndex = grid[0].length - 1;
    var allKeys = Object.create(null);
    var valid = Object.create(null);
    var finish = 0;
    var code;
    
    var startRowIndex = -1;
    var startColumnIndex = -1;
    for (var i = 0; i <= lastRowIndex; i++) {
        for (var j = 0; j <= lastColumnIndex; j++) {
            if (grid[i][j] === "@") {
                startRowIndex = i;
                startColumnIndex = j;
            } else if ((code = grid[i][j].charCodeAt()) > 96 && code < 123) {
                finish |= 1 << (code - 97);
                allKeys[grid[i][j]] = true;
                valid[grid[i][j]] = true;
            }
        }
    }
    
    valid["."] = true;
    valid["@"] = true;
    var visited = Object.create(null);
    visited[startRowIndex * 100 + startColumnIndex] = true;
    
    var point, row, column, keys, left, top, right, bottom, dicKey;
    var stack = [[startRowIndex, startColumnIndex, 0]];
    var steps = 0;
    
    var isValid = function (rowIndex, colIndex, currentKeys) {
        return valid[grid[rowIndex][colIndex]] ||
                 (code = grid[rowIndex][colIndex].charCodeAt()) > 64 && code < 91 && (currentKeys >> (code - 65) & 1);
    };
    
    while (stack.length) {
        var size = stack.length;
        while (size--) {
            point = stack.shift();
            row = point[0];
            column = point[1];
            keys = point[2];

            if (allKeys[grid[row][column]]) {
                keys |= 1 << (grid[row][column].charCodeAt() - 97);
                if (keys === finish) {
                    return steps;
                }
            }

            if (row > 0 && isValid((top = row - 1), column, keys) &&
                !visited[(dicKey = keys * 10000 + top * 100 + column)]) {
                visited[dicKey] = true;
                stack.push([top, column, keys]);
            }

            if (row < lastRowIndex && isValid((bottom = row + 1), column, keys) &&
                !visited[(dicKey = keys * 10000 + bottom * 100 + column)]) {
                visited[dicKey] = true;
                stack.push([bottom, column, keys]);
            }

            if (column > 0 && isValid(row, (left = column - 1), keys) &&
                !visited[(dicKey = keys * 10000 + row * 100 + left)]) {
                visited[dicKey] = true;
                stack.push([row, left, keys]);
            }

            if (column < lastColumnIndex && isValid(row, (right = column + 1), keys) &&
                !visited[(dicKey = keys * 10000 + row * 100 + right)]) {
                visited[dicKey] = true;
                stack.push([row, right, keys]);
            }
        }
        steps++;
    };
    
    return -1;
};