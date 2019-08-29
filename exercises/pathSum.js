/*
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
]
*/
var pathSum = function(root, sum) {
     var left,
        right,
        i;
    
    if(root===null)return [];
    if(sum===root.val&&root.left===null&&root.right===null)return [[root.val]];
    
    left=pathSum(root.left,sum-root.val);
    right=pathSum(root.right,sum-root.val);
    
    for(i=0;i<left.length;i++){
        left[i].unshift(root.val);
    }
    for(i=0;i<right.length;i++){
        right[i].unshift(root.val);
    }
    return left.concat(right);
};