/*
Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.

Example:

Input: 3
Output:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
Explanation:
The above output corresponds to the 5 unique BST's shown below:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/
let m = {}
var generateTrees = function(n) {
	if(n<1) return [];
	return (function genTree(start,end){
		let res = [];
		let key = start+' '+end;
		if(m[key]) return m[key];
		if(start>end){
			res.push(null);
			m[key] = res;
			return res;
		}
		if(start===end){
			res.push(new TreeNode(start));
			m[key] = res;
			return res;
		}
		for(let i=start; i<=end; i++){
			let leftArr = genTree(start, i-1), rightArr = genTree(i+1, end);
			for(let left of leftArr){
				for(let right of rightArr){
					let root = new TreeNode(i);
					root.left = left;
					root.right = right;
					res.push(root);
				}
			}
		}
		m[key]=res;
		return res;
	})(1,n);
};