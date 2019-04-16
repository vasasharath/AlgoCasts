/*
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

 

Example 1:

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23
 

Note:

The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.
*/
var rangeSumBST = function(root, L, R) {
    var sum=0;
  var node = root, stack = [];
  while(node || stack.length>0) {
    if(node) {
      stack.push(node);
      node = node.left;
    } else if(stack.length>0) {
      node = stack.pop();
      // inorder check +++
      var thisValue = node.val;
      if(thisValue > R) {
        break;
      } else if(L <= thisValue && thisValue <= R) {
        sum += thisValue;
      }
      // +++++++++++++++++
      node = node.right;
    }
  }
  return sum;
}