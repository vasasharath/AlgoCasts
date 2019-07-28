/*
Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL
*/
var rotateRight = function(head, k) {
  if (!head) return head;
  
  let length = len(head);
  
  k = k % length;
  
  for (let i = 0; i < k; i++) {
    head = moveRight1Step(head);
  }  
  return head;
};

function moveRight1Step(head) {
  let pre = head;
  let current = head;
  while (current && current.next !== null) {
    pre = current;
    current = current.next;
  }
  
  current.next = head;
  head = current;
  pre.next = null;
  
  return head;
}

function len(head) {
  if (!head) return 0;
  let leng = 1;
  let current = head;
  while (current.next) {
    leng++;
    current = current.next;
  }
  return leng;
}