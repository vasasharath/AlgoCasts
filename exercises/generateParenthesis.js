/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/
var generateParenthesis = function(n) {
     if (n === 0) return 0;

  var res = [];
  function dfs(s, open, close, n) {
    if (s.length < n*2) {
      if (open >= close+1) dfs(s+')', open, close+1, n)
      if (open < n) dfs(s+'(', open+1, close, n);
    } else {
      res.push(s);
    }
  }
  
  dfs('(', 1, 0, n);
  return res;
};