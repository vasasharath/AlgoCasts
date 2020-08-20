/*
Given a binary tree, you need to find the length of Longest Consecutive Path in Binary Tree.

Especially, this path can be either increasing or decreasing. For example, [1,2,3,4] and [4,3,2,1] are both considered valid, but the path [1,2,4,3] is not valid. On the other hand, the path can be in the child-Parent-child order, where not necessarily be parent-child order.

Example 1:

Input:
        1
       / \
      2   3
Output: 2
Explanation: The longest consecutive path is [1, 2] or [2, 1].
 

Example 2:

Input:
        2
       / \
      1   3
Output: 3
Explanation: The longest consecutive path is [1, 2, 3] or [3, 2, 1].
 

Note: All the values of tree nodes are in the range of [-1e7, 1e7].
*/
var longestConsecutive = function(root) {
    if (!root) return 0;
    
    function connected(node, prev, isGreater){
        if (!node) return 0;
        if (isGreater){
            if (node.val === prev+1) {
                let leftConnected = connected(node.left, node.val, isGreater);
                let rightConnected = connected(node.right, node.val, isGreater);
                return 1+Math.max(leftConnected, rightConnected)
            }
        }else{
            if (node.val === prev-1) {
                let leftConnected = connected(node.left, node.val, isGreater);
                let rightConnected = connected(node.right, node.val, isGreater);
                return 1+Math.max(leftConnected, rightConnected)
            }
        }
        return 0; // the rest not connected
    }
    
    // left connected+1 (a)
    let a = connected(root.left, root.val, true);
    // left connected-1 (b)
    let b = connected(root.left, root.val, false);
    // left not connected (c)
    let c = longestConsecutive(root.left);
    
    // right connected+1 (d)
    let d = connected(root.right, root.val, true);
    // right connected-1 (e)
    let e = connected(root.right, root.val, false);
    // right not connected (f)
    let f = longestConsecutive(root.right);
    
    //case1 a+e
    let case1 = a+e+1;
    //case2 b+d
    let case2 = b+d+1;
    //case3 c or f 
    let case3 = Math.max(c,f);
    
    return Math.max(case1, case2, case3);
};