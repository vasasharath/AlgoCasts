/*
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

Example:

Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]
*/
var restoreIpAddresses = function(s) {
   const res = [];
  dfs([], 0);
  return res;
  
  function dfs(prefix, idx) {
    if (prefix.length === 4 && idx === s.length) {
      res.push(prefix.join('.'));
      return;
    }
    
    if (prefix.length === 4 || idx === s.length) {
      return;
    }
    
    for (let r = idx; r < s.length; r++) {
      if (r !== idx && s[idx] === '0') return;
      
      const num = parseInt(s.slice(idx, r+1));
      if (num > 255) {
        return;
      }
      prefix.push(num);
      dfs(prefix, r+1);
      prefix.pop();
    }
  }
}