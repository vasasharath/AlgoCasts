/*
A complete binary tree is a binary tree in which every level, except possibly the last, 
is completely filled, and all nodes are as far left as possible.

Write a data structure CBTInserter that is initialized with a complete binary tree and supports the following operations:

CBTInserter(TreeNode root) initializes the data structure on a given tree with head node root;
CBTInserter.insert(int v) will insert a TreeNode into the tree with value node.val = v so that the tree remains complete, 
and returns the value of the parent of the inserted TreeNode;
CBTInserter.get_root() will return the head node of the tree.
 

Example 1:

Input: inputs = ["CBTInserter","insert","get_root"], inputs = [[[1]],[2],[]]
Output: [null,1,[1,2]]
Example 2:

Input: inputs = ["CBTInserter","insert","insert","get_root"], inputs = [[[1,2,3,4,5,6]],[7],[8],[]]
Output: [null,3,4,[1,2,3,4,5,6,7,8]]
 

Note:

The initial given tree is complete and contains between 1 and 1000 nodes.
CBTInserter.insert is called at most 10000 times per test case.
Every value of a given or inserted node is between 0 and 5000.
*/
var CBTInserter = function(root) {
    this.treeArr = [];
    let queue = [root];
    while( queue.length > 0) {
        let cur = queue.shift(1);
        this.treeArr.push(cur);
        if(cur.left) queue.push(cur.left);
        if(cur.right) queue.push(cur.right);
    }
};
 
CBTInserter.prototype.insert = function(e) {
        let cur = new TreeNode(e);
        let index = this.treeArr.length;
        let pIndex = Math.floor((index - 1)/2);
        if(index % 2 === 1){
            // left node
            this.treeArr[pIndex].left = cur;
        }  else
            this.treeArr[pIndex].right = cur;
        this.treeArr.push(cur);
    return this.treeArr[pIndex].val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.treeArr[0];
};