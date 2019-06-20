/*
On a 2D plane, we place stones at some integer coordinate points.  Each coordinate point may have at most one stone.

Now, a move consists of removing a stone that shares a column or row with another stone on the grid.

What is the largest possible number of moves we can make?

 

Example 1:

Input: stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
Output: 5
Example 2:

Input: stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
Output: 3
Example 3:

Input: stones = [[0,0]]
Output: 0
 

Note:

1 <= stones.length <= 1000
0 <= stones[i][j] < 10000
*/
var removeStones = function(stones) {
    let subsetCount = stones.length;
    const parentMap = [];
    
    // Initialize the parent map to give each stone it's own set
    for (let i = 0; i < stones.length; i++) {
        parentMap[i] = i;
    }
    
    for (let thisStonesIdx = 1; thisStonesIdx < stones.length; thisStonesIdx++) {           
        const thisStone = stones[thisStonesIdx];
        
        for (let thatStonesIdx = 0; thatStonesIdx < thisStonesIdx; thatStonesIdx++) {
            const thatStone = stones[thatStonesIdx];
            
            // Not in the same row or column, skip ahead
            if (thisStone[0] !== thatStone[0] && thisStone[1] !== thatStone[1]) continue;
            
            // If this stone isn't already part of an existing subset
            if (parentMap[thisStonesIdx] === thisStonesIdx) {
                // Add it to that one's subset
                parentMap[thisStonesIdx] = thatStonesIdx;
                subsetCount -= 1;
            } else {
                // Find this stone's root
                let currentThisStonesParentIndex = parentMap[thisStonesIdx];
                while (parentMap[currentThisStonesParentIndex] !== currentThisStonesParentIndex) {
                    currentThisStonesParentIndex = parentMap[currentThisStonesParentIndex];
                }
                
                // Find that stone's root
                let currentThatStonesParentIndex = parentMap[thatStonesIdx];
                while (parentMap[currentThatStonesParentIndex] !== currentThatStonesParentIndex) {
                    currentThatStonesParentIndex = parentMap[currentThatStonesParentIndex];
                }

                // If they're not in the same subset, merge them
                if (currentThisStonesParentIndex != currentThatStonesParentIndex) {
                    parentMap[currentThisStonesParentIndex] = currentThatStonesParentIndex;  
                    subsetCount -= 1;
                }
            }
        }
    }
    
    return stones.length - subsetCount;
};