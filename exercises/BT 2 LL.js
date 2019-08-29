/*
Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
*/
var flatten = function (root) {
    if (!root) {
        return;
    }
    let list = [];
    dfs(root, list);
    root.left = null;
    let cursor = root;
    for (let i = 1; i < list.length; i++) {
        cursor.right = new TreeNode(list[i].val);
        cursor = cursor.right;
    }
};

var dfs = function (root, list) {
    if (!root) {
        return;
    }
    list.push(root);
    if (root.left) {
        dfs(root.left, list);
    }
    if (root.right) {
        dfs(root.right, list);
    }
}