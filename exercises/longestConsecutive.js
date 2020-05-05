/*
Given a binary tree, find the length of the longest consecutive sequence path.

The path refers to any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The longest consecutive path need to be from parent to child (cannot be the reverse).

Example 1:

Input:

   1
    \
     3
    / \
   2   4
        \
         5

Output: 3

Explanation: Longest consecutive sequence path is 3-4-5, so return 3.
Example 2:

Input:

   2
    \
     3
    / 
   2    
  / 
 1

Output: 2 

Explanation: Longest consecutive sequence path is 2-3, not 3-2-1, so return 2.
*/
var longestConsecutive = function(root, count = 0, prev = Infinity) {
    if (!root) return count;
    
    let nextCount = (root.val - 1 != prev) ? 0 : count;
    const a = longestConsecutive(root.right, nextCount + 1, root.val);
    const b = longestConsecutive(root.left, nextCount + 1, root.val);
    return Math.max(a, b, count);
};