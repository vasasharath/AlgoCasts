/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Count the number of distinct islands. An island is considered to be the same as another if they have the same shape, or have the same shape after rotation (90, 180, or 270 degrees only) or reflection (left/right direction or up/down direction).

Example 1:
11000
10000
00001
00011
Given the above grid map, return 1.

Notice that:
11
1
and
 1
11
are considered same island shapes. Because if we make a 180 degrees clockwise rotation on the first island, then two islands will have the same shapes.
Example 2:
11100
10001
01001
01110
Given the above grid map, return 2.

Here are the two distinct islands:
111
1
and
1
1

Notice that:
111
1
and
1
111
are considered same island shapes. Because if we flip the first array in the up/down direction, then they have the same shapes.
Note: The length of each dimension in the given grid does not exceed 50.
*/
let grid = [[1,1,0,0,0],[1,0,0,0,0],[0,0,0,0,1],[0,0,0,1,1]];
console.log(numDistinctIslands2(grid)); // 1

/**
 * @param {number[][]} grid
 * @return {number}
 */
/*
Time is O(n^2 * log(n^2)) [sorting each list],
Space is O(n)
*/
function numDistinctIslands2(grid) {
    if (grid === null || grid.length === 0) {
        return 0;
    }

    const m = grid.length;
    const n = grid[0].length;
    const visited = new Set();
    const distinctIslands = new Set();

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1 && !visited.has(`${r},${c}`)) {
                const points = [];
                dfs(grid, r, c, visited, points);

                if (points.length !== 0) {
                    distinctIslands.add(normalize(points));
                }
            }
        }
    }

    return distinctIslands.size;
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function dfs(grid, r, c, visited, points) {
    if (r < 0 || c < 0 || r === grid.length || c === grid[0].length || visited.has(`${r},${c}`) || grid[r][c] !== 1) {
        return;
    }

    points.push(new Point(r, c));
    visited.add(`${r},${c}`);

    dfs(grid, r-1, c, visited, points); // top
    dfs(grid, r+1, c, visited, points); // bottom
    dfs(grid, r, c-1, visited, points); // left
    dfs(grid, r, c+1, visited, points); // right
}

function normalize(points) {
    const reflections = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
    const R = reflections.length;

    // Add all the 8 combinations of rotation and reflection into an array of points.
    const combo = [];
    for (let i = 0; i < R; i++) {
        const refl = reflections[i];
        combo[i] = [];
        combo[i + R] = [];
        
        // Add rotation and reflection combinations
        for (const j in points) {
            const point = points[j];
            combo[i].push(new Point(point.x * refl[0], point.y * refl[1]));
            combo[i + R].push(new Point(point.y * refl[1], point.x * refl[0]));
        }
    }

    // Sort the points in each combination
    combo.forEach(c => {
        c.sort((a, b) => a.x !== b.x ? a.x - b.x : a.y - b.y);
    });

    // Create strings out of each combination
    const s = [];
    for (let i = 0; i < 8; i++) {
        let sb = '';
        const x0 = combo[i][0].x;
        const y0 = combo[i][0].y;
        combo[i].forEach(point => {
            sb += (point.x - x0) + ',' + (point.y - y0) + ':';
        });

        s[i] = sb;
    }

    s.sort();

    // first string uniquely identifies a shape
    return s[0];
}