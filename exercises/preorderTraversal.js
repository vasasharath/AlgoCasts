/*
Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
*/
var preorderTraversal = function(root) {
  var array = [];
    var ans = [];
    var cur = root;
    
    if(root === null)
        return [];
    
    array.push(cur);
    do{
        if(cur !== null)
            ans.push(cur.val);
            
        if(cur.right !== null)
            array.push(cur.right)
        
        if(cur.left !== null)
            array.push(cur.left)
            
        cur = array.pop();
    }while(array.length > 0)
    
    return ans;
};