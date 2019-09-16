/*
Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5
*/
var sortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let fast = head.next;
    let slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    const mid = slow.next;
    slow.next = null;
    let left = sortList(head);
    let right = sortList(mid);
    const dummy = new ListNode(0);
    let h = dummy;
    while (left !== null && right !== null) {
        if (left.val < right.val) {
            h.next = left;
            left = left.next;
        } else {
            h.next = right;
            right = right.next;
        }
        h = h.next;
    }
    if (left) {
        h.next = left;
    }
    if (right) {
        h.next = right;
    }
    return dummy.next;
};