/*
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3
*/
var deleteDuplicates = function(head) {
     let node = head;
    let prev;
    while(node) {
        if(node.next && node.val === node.next.val) {
            while(node.next && node.val === node.next.val) {
                node = node.next;
            }
            // handle no prev case
            if(!prev) {
                head = node.next;
            } else {
                prev.next = node.next;
            }
        } else {
            prev = node;
        }
        node = node.next;
    }
    return head;
};