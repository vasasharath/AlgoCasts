/*
Given a binary tree, collect a tree's nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.

 

Example:

Input: [1,2,3,4,5]
  
          1
         / \
        2   3
       / \     
      4   5    

Output: [[4,5,3],[2],[1]]
 

Explanation:

1. Removing the leaves [4,5,3] would result in this tree:

          1
         / 
        2          
 

2. Now removing the leaf [2] would result in this tree:

          1          
 

3. Now removing the leaf [1] would result in the empty tree:

          []         
*/
var findLeaves = function(root) {
    if (!root) return []
    let parents = new Map()
    function helper(node, parent = null, direction = null) {
        if (!node) return
        if (!node.left && !node.right) {
            parents.set(node, [parent, direction])
            return
        }
        parents.set(node, [parent, direction])
        helper(node.left, node, 'left')
        helper(node.right, node, 'right')
    }
    helper(root)
    let res = []
    let leaves = []
    function leafPutter(node) {
        if (!node) return
        if (!node.left && !node.right ) {
            leaves.push(node.val)
            let parent = parents.get(node)
            if (parent[1] == 'left') {
                parent[0].left = null
            }
            else {
                parent[0].right = null
            }
            return
        }
        leafPutter(node.left)
        leafPutter(node.right)
    }
    while (root.left !== null || root.right !== null) {
        leaves = []
       leafPutter(root)
        res.push(leaves)
    }
    res.push([root.val])
    return res
};
