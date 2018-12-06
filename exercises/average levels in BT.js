/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
*/
var averageOfLevels = function(root) {
var obj = {};
    preorder(root, 1, obj);
    var res = [];
    for (var key in obj) {
        var sum = 0;
        obj[key].map(num => sum +=num);
        res.push(sum/obj[key].length);
    }
    return res;
};
var preorder = function(root, level, obj) {
    if (root === null) return null;
    if (level in obj) 
        obj[level].push(root.val);
    else 
        obj[level] = [root.val];
    preorder(root.left, level+1, obj);
    preorder(root.right, level+1, obj);
}