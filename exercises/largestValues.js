/*
You need to find the largest value in each row of a binary tree.

Example:
Input: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

Output: [1, 3, 9]
*/
var helper = function(root, level, items) {
    if(!root) return;
    if(items[level]==undefined) items[level] = root.val
    items[level] = Math.max(items[level], root.val)
    helper(root.left, level+1, items)
    helper(root.right, level+1, items)
}
var largestValues = function(root) {
    var items = [];
    helper(root, 0, items)
    return items
};