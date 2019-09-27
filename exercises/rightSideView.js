/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
*/
var rightSideView = function(root) {
   var next = [{node:root,level:0}];
   var sight = []
   while(next.length != 0){
       var curr = next.pop()
       if(!curr.node) continue;
       if(curr.level == sight.length){
          sight.push(curr.node.val)
       }
       if(curr.node.left){
          next.push({node:curr.node.left,level:curr.level+1})
       }
       if(curr.node.right){
          next.push({node:curr.node.right,level:curr.level+1})
       }
   }
   return sight
};