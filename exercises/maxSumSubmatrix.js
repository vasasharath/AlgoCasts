/*
Given a non-empty 2D matrix matrix and an integer k, find the max sum of a rectangle in the matrix such that its sum is no larger than k.

Example:

Input: matrix = [[1,0,1],[0,-2,3]], k = 2
Output: 2 
Explanation: Because the sum of rectangle [[0, 1], [-2, 3]] is 2,
             and 2 is the max number no larger than k (k = 2).
Note:

The rectangle inside the matrix must have an area > 0.
What if the number of rows is much larger than the number of columns?
*/
var maxSumSubmatrix = function(matrix, k) {
    if (matrix.length == 0) {
        return 0;
    }

    var binarySearch = function(arr, target) {
        var l = 0, h = arr.length - 1;
        while (l <= h) {
            var m = Math.floor((l + h) / 2);
            if (arr[m] == target) {
                return m;

            } else if (arr[m] < target) {
                l = m + 1;
            } else {
                h = m - 1;
            }
        }
        return l;
    };

    var insert = function(arr, target) {
        var index = binarySearch(arr, target);
        if (arr[index] != target) {
            arr.splice(index, 0, target);
        }
    };

    var lowerBound = function(arr, target) {
        return arr[binarySearch(arr, target)];
    };

    var row = matrix.length;
    var col = matrix[0].length;
    var baseRow = true;
    if (row < col) {
        baseRow = false;
        var temp = row;
        row = col;
        col = temp;
    }
    var res = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < col; i++) {
        var sums = [];
        for (var c = i; c < col; c++) {
            var max = Number.MIN_SAFE_INTEGER;
            for (var r = 0; r < row; r++) {
                var elem = baseRow ? matrix[r][c] : matrix[c][r];
                sums[r] = (sums[r] == undefined ? elem : (sums[r] + elem));
            }

            var arr = [0];
            var accSum = 0;
            for (var idx = 0; idx < sums.length; idx++) {
                var sum = sums[idx];
                accSum += sum;
                var s = lowerBound(arr, accSum - k);
                if (s != undefined) {
                    max = Math.max(max, accSum - s);
                }
                insert(arr, accSum);
            }

            res = Math.max(res, max);
        }
    }

    return res;
};