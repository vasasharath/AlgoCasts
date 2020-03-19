/*
Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
Follow up: Recursive solution is trivial, could you do it iteratively?
*/
var postorderTraversal = function(root) {
    if (!root) return [];
    
    var result = [], stack = [root];
    
    while (stack.length) {
        var node = stack.pop();
        // insert the node val to the front
        result.unshift(node.val);

        if (node.left) stack.push(node.left); // left first
        if (node.right) stack.push(node.right); // then right
    }
    
    return result; 
};