/*
Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
Note:
The size of the given array will be in the range [1,1000].
*/
var constructMaximumBinaryTree = function(nums, l, h) {
    var lo = l || 0
    var hi = h || nums.length
    var maxNum = nums[lo]
    var maxIdx = lo
    
    for (var i = lo + 1; i < hi; i++) {
        if (nums[i] > maxNum) {
            maxNum = nums[i]    
            maxIdx = i
        }
    }
    
    var node = new TreeNode(maxNum)
    node.left = (maxIdx - lo) > 0 ? constructMaximumBinaryTree(nums, lo, maxIdx) : null
    node.right = (hi - (maxIdx + 1)) > 0 ? constructMaximumBinaryTree(nums, maxIdx + 1, hi) : null
    
    return node
};