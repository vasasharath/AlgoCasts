/*
Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.



For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

 

Note:

Both of the given trees will have between 1 and 100 nodes.
*/
var leafSimilar = function(root1, root2) {

    var index = 0;
    var leafs = [];
    var result = true;
    
    var traversal = function(node, check) {
        if (node === null) {
            return;
        }
        
        if (node.left === null && node.right === null) {
            if (!check) {
                leafs.push(node.val);
            } else if (leafs[index++] !== node.val) {
                result = false;
                return;
            }
        }
        
        traversal(node.left, check);
        traversal(node.right, check);
    }
    
    traversal(root1, false);
    traversal(root2, true);
    
    return result && leafs.length === index;
};