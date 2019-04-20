/*
Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.
left has a value < node.val, and any descendant of node.right has a value > node.val.  
Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

 

Example 1:

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

 

Note: 

1 <= preorder.length <= 100
The values of preorder are distinct.
*/
var bstFromPreorder = function(preorder) {
  // when empty preorder
  if(preorder.length ===0) {
    return null;
  }
  // when preorder >= 1
  var node = new TreeNode( preorder[0] );
  if(preorder.length > 1) {
    var index = 1;
    while(index<preorder.length) {
      if(preorder[index] > node.val) {
        break;
      }
      index++;
    }
    var lPreorder = preorder.slice(1,index);
    var rPreorder = preorder.slice(index);
    node.left = bstFromPreorder(lPreorder);
    node.right = bstFromPreorder(rPreorder);
  }
  return node;
};