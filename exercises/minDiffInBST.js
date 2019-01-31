/*
Given a Binary Search Tree (BST) with the root node root, 
return the minimum difference between the values of any two different nodes in the tree.

Example :

Input: root = [4,2,6,1,3,null,null]
Output: 1
Explanation:
Note that root is a TreeNode object, not an array.

The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

          4
        /   \
      2      6
     / \    
    1   3  

while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.
Note:

The size of the BST will be between 2 and 100.
The BST is always valid, each node's value is an integer, and each node's value is different.
*/
var minDiffInBST = function(root) {
    var arr = [];
    inorder(root, arr);
    var minDiff = Number.MAX_VALUE;
    for (var i = 0; i < arr.length - 1; i++) {
        var temp = arr[i+1] - arr[i];
        minDiff = Math.min(minDiff, temp)
    }
    return minDiff;
};
var inorder = function(root, arr) {
    if (root === null) return null;
    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);
}