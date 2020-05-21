/*
Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

Range Sum Query 2D
The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.

Example:
Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
update(3, 2, 2)
sumRegion(2, 1, 4, 3) -> 10
Note:
The matrix is only modifiable by the update function.
You may assume the number of calls to update and sumRegion function is distributed evenly.
You may assume that row1 ≤ row2 and col1 ≤ col2.
*/
var NumMatrix = function(matrix) {
    this.matrix = matrix;
    if (matrix.length === 0){
        this.sums = [];
    }else{
        this.sums = new Array(matrix.length+1).fill()
            .map(() => new Array(matrix[0].length+1).fill(0));
    }
    this.insert = (i,j,diff) => {
        for (let n=i; n < this.sums.length; n+=(n&(-n))){
            for (let m=j; m < this.sums[n].length; m+=(m&(-m))){
                this.sums[n][m] += diff;
            }
        }
    }
    this.search = (i,j) => {
        let sum = 0;
        for (let n=i; n>0; n -= (n&(-n))){
            for (let m=j; m>0; m -= (m&(-m))){
                sum += this.sums[n][m];
            }
        }
        return sum;
    }
    for (let n=0; n < matrix.length; n++){
        for (let m=0; m < matrix[n].length; m++){
            this.insert(n+1,m+1,matrix[n][m]);
        }
    }
    
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
    this.insert(row+1,col+1, val-this.matrix[row][col]);
    this.matrix[row][col] = val;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.search(row2+1,col2+1) - this.search(row1, col2+1) 
        - this.search(row2+1, col1) + this.search(row1, col1);
};