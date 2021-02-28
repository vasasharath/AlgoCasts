/*
Given the root of a binary tree, determine if it is a complete binary tree.

In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

 

Example 1:


Input: root = [1,2,3,4,5,6]
Output: true
Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.
Example 2:


Input: root = [1,2,3,4,5,null,7]
Output: false
Explanation: The node with value 7 isn't as far left as possible.
 

Constraints:

The number of nodes in the tree is in the range [1, 100].
1 <= Node.val <= 1000
*/
var isCompleteTree = function(root) {
    if(root == null) return true;
    var end=false;
    var q=[root];
    while(q.length>0){
         var cur=q.shift();
         if(cur == null){
             end=true;
         }else{
             if(end) return false;
             q.push(cur.left);
             q.push(cur.right);
         }
    }
    return true;
};