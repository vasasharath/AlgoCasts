/*
Given two strings s and t, determine if they are both one edit distance apart.

Note: 

There are 3 possiblities to satisify one edit distance apart:

Insert a character into s to get t
Delete a character from s to get t
Replace a character of s to get t
Example 1:

Input: s = "ab", t = "acb"
Output: true
Explanation: We can insert 'c' into s to get t.
Example 2:

Input: s = "cab", t = "ad"
Output: false
Explanation: We cannot get t from s by only one step.
Example 3:

Input: s = "1203", t = "1213"
Output: true
Explanation: We can replace '0' with '1' to get t.
*/
var isOneEditDistance = function(s, t) {
     if (s === t) return false;
    if (Math.abs(s.length - t.length) > 1) return false;    
    
    if (s.length != t.length) {
        if (~s.indexOf(t) || ~t.indexOf(s)) return true;
        if (t.length < s.length) {
            const u = t;
            t = s;
            s = u;
        }
        for (let insertAt = 0; insertAt < t.length; ++insertAt) {
            if (s[insertAt] !== t[insertAt]) {
                const combined = s.substr(0, insertAt) + t[insertAt] + s.substr(insertAt);
                return combined === t;
            }
        }
        return false;
    }
    let diffs = 0;
    for (let i = 0; i < t.length; ++i) {
        if (s[i] !== t[i]) {
            if (++diffs > 1) return false;
        }
    }
    return diffs==1;
};