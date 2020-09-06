/*
Given a string s and a list of strings dict, you need to add a closed pair of bold tag <b> and </b> to wrap the substrings in s that exist in dict. If two such substrings overlap, you need to wrap them together by only one pair of closed bold tag. Also, if two substrings wrapped by bold tags are consecutive, you need to combine them.
Example 1:

Input: 
s = "abcxyz123"
dict = ["abc","123"]
Output:
"<b>abc</b>xyz<b>123</b>"
 

Example 2:

Input: 
s = "aaabbcc"
dict = ["aaa","aab","bc"]
Output:
"<b>aaabbc</b>c"
 

Constraints:

The given dict won't contain duplicates, and its length won't exceed 100.
All the strings in input have length in range [1, 1000].
*/
var addBoldTag = function(s, dict) {
    const bold = new Array(s.length);
    for (let sub of dict) {
        let found = -1;
        let prevBold = 0;
        while ((found = s.indexOf(sub, found + 1)) !== -1) {
            for (let i = Math.max(prevBold, found); i < found + sub.length; i++) {
                bold[i] = 1;
            }
            prevBold = found + sub.length;
        }
    }
    let res = '';
    let open = false;
    for (let i = 0; i < s.length; i++) {
        if (bold[i] && !open) {
            open = true;
            res += '<b>';
        } else if (!bold[i] && open) {
            open = false;
            res += '</b>';
        }
        res += s[i];
    }
    return open ? res + '</b>' : res;
};