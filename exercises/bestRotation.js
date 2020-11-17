/*
Given an array A, we may rotate it by a non-negative integer K so that the array becomes A[K], A[K+1], A{K+2], ... A[A.length - 1], A[0], A[1], ..., A[K-1].  Afterward, any entries that are less than or equal to their index are worth 1 point. 

For example, if we have [2, 4, 1, 3, 0], and we rotate by K = 2, it becomes [1, 3, 0, 2, 4].  This is worth 3 points because 1 > 0 [no points], 3 > 1 [no points], 0 <= 2 [one point], 2 <= 3 [one point], 4 <= 4 [one point].

Over all possible rotations, return the rotation index K that corresponds to the highest score we could receive.  If there are multiple answers, return the smallest such index K.

Example 1:
Input: [2, 3, 1, 4, 0]
Output: 3
Explanation:  
Scores for each K are listed below: 
K = 0,  A = [2,3,1,4,0],    score 2
K = 1,  A = [3,1,4,0,2],    score 3
K = 2,  A = [1,4,0,2,3],    score 3
K = 3,  A = [4,0,2,3,1],    score 4
K = 4,  A = [0,2,3,1,4],    score 3
So we should choose K = 3, which has the highest score.

 

Example 2:
Input: [1, 3, 0, 2, 4]
Output: 0
Explanation:  A will always have 3 points no matter how it shifts.
So we will choose the smallest K, which is 0.
Note:

A will have length at most 20000.
A[i] will be in the range [0, A.length].
*/
var bestRotation = function (A) {
    let N = A.length
    let bad = new Array(N)
    for (let i = 0; i < N; i++) {
        let left = (i - A[i] + 1) % N // start of the bad interval for this number, this is the optimization where we do not repeat the range, only take note of end and start
        let right = (i + 1) % N // the rotation where the number starts to score a point
        if (left < 0) left += N
        if (bad[left] === undefined) bad[left] = 0
        bad[left] -= 1
        if (right < 0) right += N
        if (bad[right] === undefined) bad[right] = 0
        bad[right] += 1
        if (left > right)
            if (bad[0] === undefined) bad[0] = 0
            bad[0] -= 1
    }
    let best = -Infinity
    let ans = 0
    let cur = 0
    for (let j = 0; j <N; j++) {
        cur += bad[j]
        if (cur > best) {
            best = cur
            ans = j
        }            
    }
    return ans
}