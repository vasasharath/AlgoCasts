/*
Serialization is the process of converting a data structure or object into a sequence of bits so that 
it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed 
later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary search tree. 
There is no restriction on how your serialization/deserialization algorithm should work. 
You just need to ensure that a binary search tree can be serialized to a string and this string 
can be deserialized to the original tree structure.

The encoded string should be as compact as possible.

Note: Do not use class member/global/static variables to store states. 
Your serialize and deserialize algorithms should be stateless.
*/
var serialize = function(root) {
  let output = '';
  if (root) {
    output += root.val;
  }
  if (root && root.left) {
    output += ',' + serialize(root.left);
  }
  if (root && root.right) {
    output += ',' + serialize(root.right);
  }
  return output;
};
/*
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data, nodes = toArr(data), min = -Infinity, max = Infinity) {
  if (!nodes.length || nodes[0] <= min || nodes[0] >= max) {
    return null;
  }
  const root = createNode(nodes.shift());
  root.left = deserialize(data, nodes, min, root.val);
  root.right = deserialize(data, nodes, root.val, max);
  return root;
};

function toArr(str) {
  return str
    .split(',')
    .filter((c) => !!c)
    .map((c) => parseInt(c));
}

function createNode(val) {
  if (val === '') {
    return null;
  }
  return new TreeNode(val);
}