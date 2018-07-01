/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
var lengthOfLongestSubstring = function(s) {
    var max = 0, current_string = "", i, char, pos;

    for (i = 0; i < s.length; i++) {
        char = s.charAt(i);
        pos = current_string.indexOf(char);
        if (pos !== -1) {
            // cut "ab" to "b" when you see another "a"
            current_string = current_string.substr(pos + 1);
        }
        current_string += char;
        max = Math.max(max, current_string.length);
    }
    return max;
};