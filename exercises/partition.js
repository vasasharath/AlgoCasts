/*
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
*/
var partition = function(head, x) {
    const leftHead = new ListNode(); // dummy node
  const rightHead = new ListNode(); // dummy node
  let left = leftHead;
  let right = rightHead;

  // Split list into two sides, left if val < x, else right
  for (let node = head; node !== null; node = node.next) {
    if (node.val < x) {
      left.next = node;
      left = node;
    } else {
      right.next = node;
      right = node;
    }
  }

  // Combine the two sides
  left.next = rightHead.next;
  right.next = null;

  return leftHead.next;
};