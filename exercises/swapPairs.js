/*
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

 

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3
*/
var swapPairs = function(head) {
     if(!head || !head.next) return head;
    let newHead = head.next;
    let curr = head;
    
    while(curr && curr.next){
        let twoNext = curr.next.next;
        curr.next.next= curr;
        curr.next = (twoNext && twoNext.next) ? twoNext.next: twoNext;
        curr = twoNext;
    }
    return newHead;
};