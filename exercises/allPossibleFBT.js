/*
A full binary tree is a binary tree where each node has exactly 0 or 2 children.

Return a list of all possible full binary trees with N nodes.  Each element of the answer is the root node of one possible tree.

Each node of each tree in the answer must have node.val = 0.

You may return the final list of trees in any order.

 

Example 1:

Input: 7
Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
Explanation:

 

Note:

1 <= N <= 20
*/
let stashedTrees = {};
var allPossibleFBT = function(N) {

    // Shortcut if possible
    if (stashedTrees[N]) {
        return stashedTrees[N];
    }
    
    // Even positive numbers all return empty arrays
    if (N % 2 === 0) {
        return [];
    }
    
    // Terminal Condition
    if (N === 1) {
        return [new TreeNode(0)];
    }
    
    
    
    // Match every possible left subtree with every possible right subtree.
    let possibleSubTrees = [];
    for (let i = 1; i < N; i = i + 2) {
        let leftTrees = stashedTrees[i] || allPossibleFBT(i);
        // minus 1 happens because we will "use" one for the base node of the new tree
        let rightTrees = stashedTrees[N - 1 - i] || allPossibleFBT(N - 1 - i);
        
        
        for (let i = 0; i < leftTrees.length; i++) {
            for (let j = 0; j < rightTrees.length; j++) {
                let tempNode = new TreeNode(0);
                tempNode.left = leftTrees[i];
                tempNode.right = rightTrees[j];
                possibleSubTrees.push(tempNode);
            }
        }   
    }
    
    stashedTrees[N] = possibleSubTrees;
    return possibleSubTrees;
    
};