/*
Merge two sorted linked lists and return it as a new list. 
The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

*/

var mergeTwoLists = function(l1, l2) {
     var result = new ListNode(0);
     
    var c = result;

    while(l1 !== null && l2 !==null){
        
        if(l1.val > l2.val){
            c.next = l2;
            l2 = l2.next;
        } else {
            c.next = l1;
            l1 = l1.next;
        }
        c = c.next;
    }

    
    if(l1 !== null){
        c.next = l1;
    }

    if(l2 !== null){
        c.next = l2;
    }
    return result.next;
};