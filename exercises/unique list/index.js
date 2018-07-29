/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3
*/
var deleteDuplicates = function (head) {
	if (head === null || head.next === null)
		return head;
	var cur = head;
	while (cur.next !== null) {
		if (cur.val == cur.next.val) {
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}
	return head;
};