/*
Given the root of a tree, you are asked to find the most frequent subtree sum. 
The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself). So what is the most frequent subtree sum value? If there is a tie, return all the values with the highest frequency in any order.

Examples 1
Input:

  5
 /  \
2   -3
return [2, -3, 4], since all the values happen only once, return all of them in any order.
Examples 2
Input:

  5
 /  \
2   -5
return [2], since 2 happens twice, however -5 only occur once.
Note: You may assume the sum of values in any subtree is in the range of 32-bit signed integer.
*/
var findFrequentTreeSum = function(root) {
    const counts = {};
    const max = { val: -Infinity };
    dfs(root, counts, max);
    const sums = [];
    for (let key in counts) {
        if (counts[key] === max.val) sums.push(parseInt(key));
    }
    return sums;
};

function dfs(root, counts, max) {
    if (!root) return 0;
    let sum = root.val + dfs(root.left, counts, max) + dfs(root.right, counts, max);
    counts[sum] = (counts[sum] || 0) + 1;
    max.val = Math.max(max.val, counts[sum]);
    return sum;
}