/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

Example:

Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5

Note:

Only constant extra memory is allowed.
You may not alter the values in the list's nodes, only nodes itself may be changed.
*/
let reverse = (head) => {
    let prev = null;
    let h = head;
    while (head !== null) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return [prev, h];
}

var reverseKGroup = function(head, k) {
    if (head === null || k === 0) {
        return head;
    }
    let dummy = new ListNode(0);
    let prev = dummy;
    let slow = head;
    let fast = head;
    let count = 1;
    while (fast !== null && count < k) {
        fast = fast.next;
        count++;
    }
    while (slow !== null && fast !== null) {
        if (count !== k) {
            break;
        }
        let next = fast.next;
        fast.next = null;
        let re = reverse(slow)
        prev.next = re[0];
        prev = re[1];
        count = 1;
        slow = next;
        fast = next;
        while (fast !== null && count < k) {
            fast = fast.next;
            count++;
        }
    }
    if (slow !== null) {
        prev.next = slow;
    } else {
        prev.next = null;
    }
    return dummy.next;
};