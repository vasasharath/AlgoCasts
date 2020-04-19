/*
Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

Note:

Given target value is a floating point.
You are guaranteed to have only one unique value in the BST that is closest to the target.
Example:

Input: root = [4,2,5,1,3], target = 3.714286

    4
   / \
  2   5
 / \
1   3

Output: 4
*/
var closestValue = function(root, target) {
     let diff = Number.MAX_SAFE_INTEGER, result = root.val;
    while (root !== null) {
        let temp =  Math.abs(target - root.val);
        if (temp < diff) {
            result = root.val;
            diff = temp;
        }
        if (target <= root.val) {
            root = root.left; 
        } else {
            root = root.right;
        }
    }
    return result;
};