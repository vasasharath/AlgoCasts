/*
Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/
var numTrees = function(n) {
    return helper(n, {});
};

var helper = function(n, memo) {
    if (memo[n] !== undefined) return memo[n];
    if (n === 0 || n === 1) return 1;
    
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += helper(i, memo) * helper(n - i - 1, memo);
    }
    
    memo[n] = sum;
    return sum;
}   
 