/*
Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True
Example 2:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False
*/
var findTarget = function(root, k) {
   const sorted = [];
    
    const inorder = node => {
        if(!node) return;
        
        inorder(node.left);
        
        sorted.push(node.val);
        
        inorder(node.right);
    };
    
    inorder(root);
    
    for(let i = 0; i < sorted.length-1; i++) {
        for(let j = sorted.length-1; j > i; j--) {
            if(sorted[i] + sorted[j] === k) {
                return true;
            }
        }
    }
    return false;
};