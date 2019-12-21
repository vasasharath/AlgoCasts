/*
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
Note: Time complexity should be O(height of tree).

Example:

root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

Given key to delete is 3. So we find the node with value 3 and delete it.

One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

    5
   / \
  4   6
 /     \
2       7

Another valid answer is [5,2,6,null,4,null,7].

    5
   / \
  2   6
   \   \
    4   7
*/
var deleteNode = function(root, key) {
    if (!root) return null
    let n = root, p
    while (n && n.val !== key) {
        p = n
        key > n.val ? n = n.right : n = n.left
    }
    if (!n) return root
    let remainNode
    if (!n.left) remainNode = n.right
    if (!n.right) remainNode = n.left
    if (n.left && n.right) {
        let min = n.right
        while (min.left) min = min.left
        min.left = n.left
        remainNode = n.right
    }
    if (!p) return remainNode
    p.left === n ? p.left = remainNode : p.right = remainNode
    return root
}    