/*
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
*/

var binaryTreePaths = function(root) {
    var res = [];
    if(root && root.val !== undefined){
        getPaths(root, "");
    }
    return res;

    function getPaths(node, path){
        var isLeaf = true;
        if(node.left){
            isLeaf = false;
            getPaths(node.left, path + "->" + node.val);
        }
        if(node.right){
            isLeaf = false;
            getPaths(node.right, path + "->" + node.val);
        }
        if(isLeaf){
            var tmp = path + "->" + node.val;
            res.push(tmp.substring(2, tmp.length));
        }
    }
};