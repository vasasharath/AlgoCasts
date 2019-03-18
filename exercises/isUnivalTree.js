/*
A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

 

Example 1:


Input: [1,1,1,1,1,null,1]
Output: true
Example 2:


Input: [2,2,2,5,2]
Output: false
 

Note:

The number of nodes in the given tree will be in the range [1, 100].
Each node's value will be an integer in the range [0, 99].
*/
var isUnivalTree = function(root) {
    if (!root) {
        return true;
    } else if (root.left && root.right) {
        return root.val === root.left.val && root.val === root.right.val && isUnivalTree(root.left) && isUnivalTree(root.right);
    } else {
         const node = root.left || root.right
         return !node ? true : root.val === node.val && isUnivalTree(node);
    }
};