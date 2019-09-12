/*
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
*/
var reorderList = function(head) {
    let arr = [];
    
  let cur = head;
    
  while (cur) {
      arr.push(cur);
      cur = cur.next;
  }
    
  let size = arr.length;
  let half = Math.floor(size/2);

    
  cur = head;
    
  for (let i = 0; i < half; i++) {
      let nextFromEnd = arr[size - i - 1];
      
      arr[size - i - 2].next = null;
      
      let next = cur.next;
      
      cur.next = nextFromEnd;
      
      nextFromEnd.next = next;
      
      cur = next;
  }
};