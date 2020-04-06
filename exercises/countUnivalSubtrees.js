/*
Given a binary tree, count the number of uni-value subtrees.

A Uni-value subtree means all nodes of the subtree have the same value.

Example :

Input:  root = [5,1,5,5,5,null,5]

              5
             / \
            1   5
           / \   \
          5   5   5

Output: 4
*/
var countUnivalSubtrees = function(root, res = { val: 0 }) {
    if (!root) return 0;
    res.val += isUnival(root, root.val);
    countUnivalSubtrees(root.left, res);
    countUnivalSubtrees(root.right, res);
    return res.val;
};

function isUnival(root, val) {
    return root ? root.val === val && isUnival(root.left, val) && isUnival(root.right, val) : true;
}