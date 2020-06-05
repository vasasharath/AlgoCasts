/*
Given a binary tree, find the largest subtree which is a Binary Search Tree (BST), where largest means subtree with largest number of nodes in it.

Note:
A subtree must include all of its descendants.

Example:

Input: [10,5,15,1,8,null,7]

   10 
   / \ 
  5  15 
 / \   \ 
1   8   7

Output: 3
Explanation: The Largest BST Subtree in this case is the highlighted one.
             The return value is the subtree's size, which is 3.
Follow up:
Can you figure out ways to solve it with O(n) time complexity?
*/
var largestBSTSubtree = function(root) {
    if (!root) return 0;
    return dfsPostOrder(root).subtreeSize;
};

const dfsPostOrder = (root) => {        
    let max = root.val;
    let min = root.val;
    
    if (!root.left && !root.right) {
        return { isBST: true, subtreeSize: 1, subtreeMax: max, subtreeMin: min };
    }
    
    let selfIsBST = true;
    let leftIsBST = true;
    let rightIsBST = true;
    
    let leftSize = 0;
    let rightSize = 0;
    
    if (root.left) {
        const { isBST, subtreeSize, subtreeMax, subtreeMin } = dfsPostOrder(root.left);
        if (subtreeMax >= root.val) {
            selfIsBST = false;
        }
        leftIsBST = isBST;
        leftSize = subtreeSize;
        min = Math.min(min, subtreeMin);
    }
    
    if (root.right) {        
        const { isBST, subtreeSize, subtreeMax, subtreeMin } = dfsPostOrder(root.right);
        if (subtreeMin < root.val) {
            selfIsBST = false;
        }
        rightIsBST = isBST;
        rightSize = subtreeSize;
        max = Math.max(max, subtreeMax);
    }
            
    if (leftIsBST && rightIsBST && selfIsBST) {
        return { isBST: true, subtreeSize: leftSize + rightSize + 1, subtreeMax: max, subtreeMin: min };
    }
    
    return { isBST: false, subtreeSize: Math.max(leftSize, rightSize), subtreeMax: max, subtreeMin: min };
}