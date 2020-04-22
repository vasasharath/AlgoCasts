/*
Given a non-empty binary search tree and a target value, find k values in the BST that are closest to the target.

Note:

Given target value is a floating point.
You may assume k is always valid, that is: k ≤ total nodes.
You are guaranteed to have only one unique set of k values in the BST that are closest to the target.
Example:

Input: root = [4,2,5,1,3], target = 3.714286, and k = 2

    4
   / \
  2   5
 / \
1   3

Output: [4,3]
Follow up:
Assume that the BST is balanced, could you solve it in less than O(n) runtime (where n = total nodes)?
*/
var closestKValues = function(root, target, k) {
   var final = [], smaller = [];
  var current = root, stack=[];
  while(current || stack.length>0) {
    if(current) {
      stack.push(current);
      current = current.left;
    } else if(stack.length > 0) {
      current = stack.pop();
      // check value ++++++
      var thisVal = current.val;
      var thisDiff = Math.abs(thisVal-target);
      if(thisVal === target) {
        final.push(thisVal);
      } else if(thisVal < target) {
        smaller.push([thisVal, thisDiff]);
      } else if(thisVal > target) {
        while(smaller.length>0 && smaller[smaller.length-1][1] <= thisDiff) {
          var smallerLast = smaller.pop();
          final.push(smallerLast[0]);
        }
        final.push(thisVal);
      }
      if(final.length >= k) {
        break;
      }
      // ++++++++++++++++++
      current = current.right;
    }
  }
  while(final.length < k) {
    var smallerLast = smaller.pop();
    final.push(smallerLast[0]);
  }
  return final.slice(0,k);  
};