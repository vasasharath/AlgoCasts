/*
Given several boxes with different colors represented by different positive numbers.
You may experience several rounds to remove boxes until there is no box left. Each time you can choose some continuous boxes with the same color (composed of k boxes, k >= 1), remove them and get k*k points.
Find the maximum points you can get.

 

Example 1:

Input: boxes = [1,3,2,2,2,3,4,3,1]
Output: 23
Explanation:
[1, 3, 2, 2, 2, 3, 4, 3, 1] 
----> [1, 3, 3, 4, 3, 1] (3*3=9 points) 
----> [1, 3, 3, 3, 1] (1*1=1 points) 
----> [1, 1] (3*3=9 points) 
----> [] (2*2=4 points)
 

Constraints:

1 <= boxes.length <= 100
1 <= boxes[i] <= 100

*/
const removeBoxes = function(boxes) {
    const n = boxes.length
    const dp = Array.from(new Array(n), () => {
        return Array.from(new Array(n), () => {
            return new Array(n).fill(0)
        })
    })
    return removeBoxesSub(boxes, 0, n - 1, 0, dp)
};

function removeBoxesSub(boxes, i, j, k, dp) {
    if(i > j) return 0;
    if(dp[i][j][k] > 0) return dp[i][j][k]
    for(; i + 1 <= j && boxes[i+1] === boxes[i] ; i++, k++) {
        // optimization: all boxes of the same color counted continuously from the first box should be grouped together
    }
    let res = (k+1) * (k+1) + removeBoxesSub(boxes, i + 1, j, 0, dp)
    for(let m = i + 1; m <= j; m++) {
        if(boxes[i] === boxes[m]) {
            res = Math.max(res, removeBoxesSub(boxes, i + 1, m - 1, 0, dp) + removeBoxesSub(boxes, m, j, k + 1, dp) )
        }
    }
    dp[i][j][k] = res
    return res
}