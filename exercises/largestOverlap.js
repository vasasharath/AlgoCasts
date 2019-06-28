/*
Two images A and B are given, represented as binary, square matrices of the same size.  
(A binary matrix has only 0s and 1s as values.)

We translate one image however we choose (sliding it left, right, up, or down any number of units), 
and place it on top of the other image.  After, the overlap of this translation is the number of positions that have a 1 in both images.

(Note also that a translation does not include any kind of rotation.)

What is the largest possible overlap?

Example 1:

Input: A = [[1,1,0],
            [0,1,0],
            [0,1,0]]
       B = [[0,0,0],
            [0,1,1],
            [0,0,1]]
Output: 3
Explanation: We slide A to right by 1 unit and down by 1 unit.
Notes: 

1 <= A.length = A[0].length = B.length = B[0].length <= 30
0 <= A[i][j], B[i][j] <= 1
*/
var largestOverlap = function(A, B) { 
    // Get hashset of B
    // key 100* r + c
    let len = B.length;
    let setB = new Set();
    for(let i = 0; i < len; i++) {
        for(let j = 0 ; j < len ; j++){
            if(B[i][j] === 1) {
                setB.add(i * 100 + j);
            }
        }
    }
    let map = {};
    for(let i = 0; i < len; i++) {
        for(let j = 0 ; j < len ; j++){
            if(A[i][j] === 1) {
                setB.forEach(b => { 
                    let o = i * 100 + j;
                    map[b - o] = ~~map[b - o] + 1;
                })
            }
        }
    }
    let res = 0;
    Object.keys(map).forEach(key => {
        res = Math.max(res, map[key]);
    })
    return res;
};