/*
Given a binary tree, write a function to get the maximum width of the given tree. The width of a tree is the maximum width among all levels. The binary tree has the same structure as a full binary tree, but some nodes are null.

The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the null nodes between the end-nodes are also counted into the length calculation.

Example 1:

Input: 

           1
         /   \
        3     2
       / \     \  
      5   3     9 

Output: 4
Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).
Example 2:

Input: 

          1
         /  
        3    
       / \       
      5   3     

Output: 2
Explanation: The maximum width existing in the third level with the length 2 (5,3).
Example 3:

Input: 

          1
         / \
        3   2 
       /        
      5      

Output: 2
Explanation: The maximum width existing in the second level with the length 2 (3,2).
Example 4:

Input: 

          1
         / \
        3   2
       /     \  
      5       9 
     /         \
    6           7
Output: 8
Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).


Note: Answer will in the range of 32-bit signed integer.
*/
var widthOfBinaryTree = function(root) {
    const treeLevel = [];
    // let's traverse tree at the first
    // and keep nodes by levels in the array
    (function t(root, level) {
        if (treeLevel[level] === undefined) {
            treeLevel[level] = [];
        } 
        treeLevel[level].push(root);
        if (root.left) {
            t(root.left, level+1);    
        } 
        if (root.right) {
            t(root.right, level+1);    
        }
    })(root, 0);
    // this function is actually solution 
    const f = function f(root) {
        const mostLeft = [];
        const mostRight = [];
        (function ff(root, level, number) {
            if (mostLeft[level] === undefined || number < mostLeft[level]) {
                mostLeft[level] = number;
            }
            if (mostRight[level] === undefined || mostRight[level] < number) {
                mostRight[level] = number;
            }
            if (root.left) {
                ff(root.left, level+1, number*2-1);    
            } 
            if (root.right) {
                ff(root.right, level+1, number*2);    
            }
        })(root, 1, 1);    
        let answer = 0;
        for (let i = 1; i < mostLeft.length; i++)  {
            //console.log(i + " l = " + mostLeft[i] + " r = " + mostRight[i]);
            answer = Math.max(answer, mostRight[i] - mostLeft[i] + 1);
        }
        return answer;
    }
    // lets go over levels and check solution for some non-bamboo only trees
    // expect the last one    
    let answer = 0;
    for (let i = 0; i < treeLevel.length; i++) {
        if (treeLevel[i].length === 1 && (treeLevel[i+1] === undefined || treeLevel[i+1].length > 1)) {
            answer = Math.max(answer, f(treeLevel[i].pop()));    
        }
    }
         
    return answer;
};