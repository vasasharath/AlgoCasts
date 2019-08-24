/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. 
(ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/
var zigzagLevelOrder = function(root) {
    var rows = [];
    var stack = [{node: root, fromLeft: true}];
    var method = fromLeft => fromLeft ? 'push' : 'unshift';
    
    if (!root) { return []; }

    while (stack.length) {
        var {node, row = 0, fromLeft} = stack.shift();
        
        if (!rows[row]) {
            rows[row] = [];
        }
        
        rows[row][method(fromLeft)](node.val);
        
        if (node.left) {  
            stack.push({row: row + 1, node: node.left, fromLeft: !fromLeft});
        }
        if (node.right) {  
            stack.push({row: row + 1, node: node.right, fromLeft: !fromLeft});
        }
    }
    
    return rows;
};