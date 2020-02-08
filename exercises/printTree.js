/*
Print a binary tree in an m*n 2D string array following these rules:

The row number m should be equal to the height of the given binary tree.
The column number n should always be an odd number.
The root node's value (in string format) should be put in the exactly middle of the first row it can be put. The column and the row where the root node belongs will separate the rest space into two parts (left-bottom part and right-bottom part). You should print the left subtree in the left-bottom part and print the right subtree in the right-bottom part. The left-bottom part and the right-bottom part should have the same size. Even if one subtree is none while the other is not, you don't need to print anything for the none subtree but still need to leave the space as large as that for the other subtree. However, if two subtrees are none, then you don't need to leave space for both of them.
Each unused space should contain an empty string "".
Print the subtrees following the same rules.
Example 1:
Input:
     1
    /
   2
Output:
[["", "1", ""],
 ["2", "", ""]]
Example 2:
Input:
     1
    / \
   2   3
    \
     4
Output:
[["", "", "", "1", "", "", ""],
 ["", "2", "", "", "", "3", ""],
 ["", "", "4", "", "", "", ""]]
Example 3:
Input:
      1
     / \
    2   5
   / 
  3 
 / 
4 
Output:

[["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
 ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
 ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
 ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]
*/
function getTreeHeight(root){
    if(!root){
        return 0;
    }
    return 1 + Math.max(getTreeHeight(root.left), getTreeHeight(root.right));
}

function printTreeHelper(arr, root, idx, begin, end){
    if(!root){
        return;
    }
    
    let mid = ~~((begin + end)/2);
    arr[idx][mid] = String(root.val);
    printTreeHelper(arr, root.left, idx+1, begin, mid-1);
    printTreeHelper(arr, root.right, idx+1, mid+1, end);
}

var printTree = function(root) {
    //special case
    if(!root || root.length === 0){
        return [];
    }
    
    let height = getTreeHeight(root);
    //create ret array
    let arr = [];
    for(let i=0; i<height; i++){
        arr.push(new Array(Math.pow(2,height)-1).fill(""));
    }
    printTreeHelper(arr, root, 0, 0, Math.pow(2,height)-1);
    return arr;
};