/*
Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
Input:

    2
   / \
  1   3

Output:
1
Example 2: 
Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7
Note: You may assume the tree (i.e., the given root node) is not NULL.
*/
var findBottomLeftValue = function(root) {
   var result = root.val;
    var resultHeight = 0;
    (function recurse (node, height) {
        if (node === null) {
            return;
        }
        if (node.left !== null) {
            recurse(node.left, height + 1);
        }
        if (height > resultHeight) {
            result = node.val;
            resultHeight = height;
        }
        if (node.right !== null) {
            recurse(node.right, height + 1);
        }
    })(root, 1);
    return result; 
};