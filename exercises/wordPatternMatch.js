/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty substring in str.

 

Example 1:

Input: pattern = "abab", str = "redblueredblue"
Output: true
Example 2:

Input: pattern = "aaaa", str = "asdasdasdasd"
Output: true
Example 3:

Input: pattern = "aabb", str = "xyzabcxzyabc"
Output: false
 

Constraints:

You may assume both pattern and str contains only lowercase letters.
*/
var wordPatternMatch = function(pattern, str) {
   if (pattern.length == 0 && str.length == 0) {
        return true;
    }
    if (pattern.length == 0 || str.length == 0) {
        return false;
    }
    let map = new Map();
    let set = new Set();
    return helper(pattern, str, 0, 0, map, set);  
};

function helper(pattern, str, i, j, map, set) {

    if (i == pattern.length && j == str.length) {
        return true
    } else if (i >= pattern.length || j >= str.length) {
        return false;
    }
    let c = pattern[i];
    for (let k = j + 1; k <= str.length; k++) {
        let sub = str.substring(j, k);
        if (!map.has(c) && !set.has(sub)) {
            map.set(c, sub)
            set.add(sub)
            if (helper(pattern, str, i + 1, k, map, set)) {
                return true;
            }
            map.delete(c)
            set.delete(sub);
        } else if (map.has(c) && map.get(c) == sub) {
            if (helper(pattern, str, i + 1, k, map, set)) {
                return true;
            }
        }
    }
    return false; 
};