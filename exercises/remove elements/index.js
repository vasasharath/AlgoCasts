/*
Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5

*/

var removeElements = function(head, val) {
    
    if(head == null) return null;

    var node = new ListNode(0);

    var prev =node;
    node.next = head;

    while(head != null){
        if(head.val != val){
            prev = head;
            head = head.next;
        } else {
            prev.next = head.next;
            head = head.next;           
        }

    }

    return node.next;
};