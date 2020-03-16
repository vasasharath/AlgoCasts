/*
Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
*/
var connect = function(root) {
    var prev_to_link = null;
	var next_level_head = null;
	var curr = root;
	
	while (!!curr) {
		if (!!curr.left) {
			if (!!prev_to_link) {
				prev_to_link.next = curr.left;
			}
			prev_to_link = curr.left;
			
			if (!next_level_head) {
				next_level_head = curr.left;
			}
		}
		if (!!curr.right) {
			if (!!prev_to_link) {
				prev_to_link.next = curr.right;
			}
			prev_to_link = curr.right;
			
			if (!next_level_head) {
				next_level_head = curr.right;
			}
		}
		
		if (!!curr.next) {
			curr = curr.next;
		}else {
			curr = next_level_head;
			next_level_head = null;
			prev_to_link = null;
		}
	}
    return root;
};