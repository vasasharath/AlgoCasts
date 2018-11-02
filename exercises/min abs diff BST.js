/*
Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
*/
var getMinimumDifference = function(root) {
    var prev = Infinity;
    var totalMin = Infinity;
    
    function traverse(node) {
        if (!node) {
            return;
        }
        
        traverse(node.left);
        
        totalMin = Math.min(totalMin, Math.abs(node.val - prev));
        prev = node.val;
        
        traverse(node.right);
    }
    
    traverse(root);
    
    return totalMin;
};