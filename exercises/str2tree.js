/*
You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.

You always start to construct the left child node of the parent first if it exists.

Example:
Input: "4(2(3)(1))(6(5))"
Output: return the tree root node representing the following tree:

       4
     /   \
    2     6
   / \   / 
  3   1 5   
Note:
There will only be '(', ')', '-' and '0' ~ '9' in the input string.
An empty tree is represented by "" instead of "()".
 

Constraints:

 
*/
var str2tree = function(s) {
    if(s == "" || s.length == 0) return null;
    let stack=[], length= s.length;
    for(let i=0; i<length; i++){
        let cur=s.charAt(i);
        if(cur==")") stack.pop();
        else if(cur>= '0' && cur<= '9' || cur =='-'){
            let index=i;
            while(index+1< length && s.charAt(index+1) >= '0' && s.charAt(index+1) <='9') index++;
            let newNode= new TreeNode(parseInt(s.substring(i, index+1)));
            i=index;
            if(stack.length >0){
                let curEnd=stack.pop();
                if(curEnd.left != null) curEnd.right=newNode
                else curEnd.left=newNode
                stack.push(curEnd);
            }
            stack.push(newNode);
        }
    }
    return stack.pop()
};