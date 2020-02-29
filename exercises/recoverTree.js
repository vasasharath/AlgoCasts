/*
Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Example 1:

Input: [1,3,null,null,2]

   1
  /
 3
  \
   2

Output: [3,1,null,null,2]

   3
  /
 1
  \
   2
Example 2:

Input: [3,1,4,null,null,2]

  3
 / \
1   4
   /
  2

Output: [2,1,4,null,null,3]

  2
 / \
1   4
   /
  3
Follow up:

A solution using O(n) space is pretty straight forward.
Could you devise a constant space solution?
*/
var recoverTree = function(root) {
     var node1, node2;
  var prev = new TreeNode(-Number.MAX_VALUE);
  traverse(root);
  var tmp = node1.val;
  node1.val = node2.val;
  node2.val = tmp;
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    if (node.val < prev.val) {
      node2 = node;
      if (!node1) node1 = prev;
    }
    prev = node;
    traverse(node.right);
  }
};