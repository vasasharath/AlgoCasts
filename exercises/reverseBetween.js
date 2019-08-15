/*
Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
*/
var reverseBetween = function(head, m, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let start_prev = dummy;
    let start_next, end_prev, end_next;
    let i = 0;
    while (head) {
        i++;
        if (i === m - 1) {
            start_prev = head;
        }
        if (i === m) {
            end_prev = head;
        }
        if (i <= m) {
            head = head.next;
        }
        if (i > m && i <= n) {
            start_next = start_prev.next;
            end_next = head.next;
            start_prev.next = head;
            head.next = start_next;
            end_prev.next = end_next;
            head = end_next;
        }
        if (i > n) {
            break;
        }
    }
    return dummy.next;
};