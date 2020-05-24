/*
Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

Examples 1:

Input: [3,9,20,null,null,15,7]

   3
  /\
 /  \
 9  20
    /\
   /  \
  15   7 

Output:

[
  [9],
  [3,15],
  [20],
  [7]
]
Examples 2:

Input: [3,9,8,4,0,1,7]

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7 

Output:

[
  [4],
  [9],
  [3,0,1],
  [8],
  [7]
]
Examples 3:

Input: [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5)

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7
    /\
   /  \
   5   2

Output:

[
  [4],
  [9,5],
  [3,0,1],
  [8,2],
  [7]
]
*/
var verticalOrder = function(root) {
    if (!root) return [];
    let myQ = [[root, 0]], myMap = {};
    while (myQ.length !== 0) {
        let [node, i] = myQ.shift();
        myMap[i] === undefined ? myMap[i] = [node.val] : myMap[i].push(node.val);
        if (node.left) myQ.push([node.left, i-1]);
        if (node.right) myQ.push([node.right, i+1]);
    }
    return Object.keys(myMap).sort((k1, k2) => k1 - k2).map(k => myMap[k]);
};