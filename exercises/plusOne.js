/*
Given a non-negative integer represented as non-empty a singly linked list of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.

Example :

Input: [1,2,3]
Output: [1,2,4]
*/
var plusOne = function(head) {
  if(!head) return null;
  plusOneHelper(head);
  
  if(head.val === 0) {
    const newHead = new ListNode(1);
    newHead.next = head;
    head = newHead;
  }
  return head; 
  
  function plusOneHelper(node) {
    if(!node) return 1; 
    const previousResult = plusOneHelper(node.next);
    
    const sum = node.val + previousResult;
    node.val = sum % 10;
    
    return sum === 10 ? 1 : 0;
  }
};