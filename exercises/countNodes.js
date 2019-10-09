/*
Given a complete binary tree, count the number of nodes.

Note:

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Example:

Input: 
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6
*/
const countNodes = (root) => {
  // handle edge case
  if (!root) { return 0; }
  
  // get stack of binary traversal
  const stack = binarySearch(root, []);

  // since it's a complete tree, logically, absolute lower end and higher end are set by the observed depth, which is the length of the stack
  let lowerEnd = Math.pow(2, stack.length);
  let higherEnd = Math.pow(2, stack.length + 1) - 1;

  // go through the log in stack, adjust lower and higher end accordingly
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === 'L') {
      higherEnd = Math.floor((lowerEnd + higherEnd) / 2);
    } else {
      lowerEnd = Math.ceil((lowerEnd + higherEnd) / 2);
    }
  }

  // either higherend and lowerend should work. in theory they should have converged to same value
  return higherEnd;
};

function getDepth (node) {
  if (!node.left) return 1;
  return getDepth(node.left) + 1;
};

function binarySearch (node, stack) {
  const left = node.left ? getDepth(node.left) : 0;
  const right = node.right ? getDepth(node.right) : 0;

  if (left === 0) {
    return stack;
  }

  if (left === right) {
    stack.push('R');
    stack = binarySearch(node.right, stack);
  } else {
    stack.push('L');
    stack = binarySearch(node.left, stack);
  }

  return stack;
}