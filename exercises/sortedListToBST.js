/*
Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted linked list: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
*/
const getListLength=head=>{
    let counter=0,ptr=head;
    while(ptr){
        counter=counter+1;
        ptr=ptr.next;
    }
    return counter;
}

var sortedListToBST = function(head) {
    const listToTree=(l,r)=>{
        if(l<=r) {
            let middle=Math.floor((l+r)/2);
            let left=listToTree(l,middle-1);
            let root=new TreeNode(head.val);
            root.left=left;
            head=head.next;
            root.right=listToTree(middle+1,r);
            return root;
        }
        else return null;
   };
    return listToTree(0,getListLength(head)-1);
};