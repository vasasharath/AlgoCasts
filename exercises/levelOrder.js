/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/
var levelOrder = function(root) {
     let ans = [];
    if(root) {
        let queue = [root];
        let nextLevelNodes = []; // the nodes of next level
        let curLevel = []; // the values of the nodes of current level
        while(queue.length > 0) {
            let node = queue.shift();
            curLevel.push(node.val);
            if(node.left) {
                nextLevelNodes.push(node.left);
            }
            if(node.right) {
                nextLevelNodes.push(node.right);
            }
// if the length of queue equals zero, it means the current level has been tranversed, so //assign the next level nodes to it
            if(queue.length === 0) {
                queue = nextLevelNodes;
                ans.push(curLevel);
                nextLevelNodes = []; // reset to store the nodes of next level
                curLevel = [];  // reset to store the value of nodes of next level
            }
        }
    }
    return ans;
};