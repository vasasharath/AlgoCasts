/*
Given a binary tree, return all duplicate subtrees. 
For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with same node values.

Example 1:

        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
The following are two duplicate subtrees:

      2
     /
    4
and

    4
Therefore, you need to return above trees' root in the form of a list.
*/
var findDuplicateSubtrees = function(root) {
	let obj={}, res=[];
	preOrder(root, obj, res);
	return res;
};

function preOrder(root, map, res){
	if(root===null) return '#';
	let str = root.val + preOrder(root.left, map, res) + preOrder(root.right, map, res);
	if(!map[str]) map[str]=0;
	map[str]++;
	if(map[str]===2) res.push(root);
	return str;
}