/*
Assume you have an array of length n initialized with all 0's and are given k update operations.

Each operation is represented as a triplet: [startIndex, endIndex, inc] which increments each element of subarray A[startIndex ... endIndex] (startIndex and endIndex inclusive) with inc.

Return the modified array after all k operations were executed.

Example:

Input: length = 5, updates = [[1,3,2],[2,4,3],[0,2,-2]]
Output: [-2,0,3,5,3]
Explanation:

Initial state:
[0,0,0,0,0]

After applying operation [1,3,2]:
[0,2,2,2,0]

After applying operation [2,4,3]:
[0,2,5,5,3]

After applying operation [0,2,-2]:
[-2,0,3,5,3]
*/
var getModifiedArray = function(length, updates) {
    let res = new Array(length).fill(0);
    
    for (let i = 0; i < updates.length; i++) {
        let startIndex = updates[i][0];
        let endIndex = updates[i][1];
        let val = updates[i][2];
        
        res[startIndex] += val;
        if (endIndex + 1 < res.length) {
            res[endIndex + 1] -= val;   
        }
    }
    
    for (let i = 1; i < length; i++) {
        res[i] += res[i-1];
    }
    
    return res;
};