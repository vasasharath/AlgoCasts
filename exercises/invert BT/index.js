/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

*/

var invertTree = function(root) {
    swap(root);
    return root;

    function swap(node){
        if(node !== null){
            var tmp = node.left;
            node.left = node.right;
            node.right = tmp;
            swap(node.left);
            swap(node.right);
        }
    }
};