/*
A group of two or more people wants to meet and minimize the total travel distance. You are given a 2D grid of values 0 or 1, where each 1 marks the home of someone in the group. The distance is calculated using Manhattan Distance, where distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|.

Example:

Input: 

1 - 0 - 0 - 0 - 1
|   |   |   |   |
0 - 0 - 0 - 0 - 0
|   |   |   |   |
0 - 0 - 1 - 0 - 0

Output: 6 

Explanation: Given three people living at (0,0), (0,4), and (2,2):
             The point (0,2) is an ideal meeting point, as the total travel distance 
             of 2+2+2=6 is minimal. So return 6.
*/
var minTotalDistance = function(grid) {
        function calcMinDistanceSingleDimension(points,origin) {
        let distance = 0;
        for(let point of points) {
            distance += Math.abs(point - origin);
        }
        return distance;
    }
    // indexes of all the ones in the columns
    function collectOnesInColumns(grid) {
        const cols = [];
        for(let col = 0; col < grid[0].length; col++) {
            for(let row = 0; row < grid.length; row++) {
                if(grid[row][col] === 1) {
                    cols.push(col);
                }
            }
        }
        return cols;
    }
    // indexes of all the ones in the rows
    function collectOnesInRows(grid) {
        const rows = [];
        for(let row = 0; row < grid.length; row++) {
            for(let col = 0; col < grid[0].length; col++) {
                if(grid[row][col] === 1) {
                    rows.push(row);
                }
            }
        }
        return rows;
    }
    
    const rows = collectOnesInRows(grid);
    const cols = collectOnesInColumns(grid);
    const rowMedian = rows[Math.floor(rows.length/2)];
    const colMedian = cols[Math.floor(cols.length/2)];
    return calcMinDistanceSingleDimension(rows,rowMedian) + calcMinDistanceSingleDimension(cols,colMedian);    

};