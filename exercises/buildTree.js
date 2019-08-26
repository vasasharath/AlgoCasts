/*
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/
var buildTree = function(preorder, inorder) {
     let map = [];
    if (preorder.length===0) return null;
    for (let i=0;i<inorder.length;i++) map[inorder[i]] = i;
    return build(0, 0, preorder.length);
    function build(preS, inS, length){
        let head = new TreeNode(preorder[preS]), leftL = map[head.val]-inS;
        if (leftL) head.left = build(preS+1, inS, leftL);
        if (length-leftL-1>0) head.right = build(preS+1+leftL, inS+leftL+1, length-leftL-1);
        return head;
    }
};