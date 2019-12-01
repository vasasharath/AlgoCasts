/*
Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in 
T appears no less than k times.

Example 1:

Input:
s = "aaabb", k = 3

Output:
3

The longest substring is "aaa", as 'a' is repeated 3 times.
Example 2:

Input:
s = "ababbc", k = 2

Output:
5

The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
*/
var longestSubstring = function(s, k) {
     var max = 0;
    
    var find = function (str) {
        var map = new Map();
        for (var i = 0; i < str.length; i++) {
            map.set(str[i], (map.get(str[i]) || 0) + 1);
        }
        
        var split = [];
        for (var [key, count] of map) {
            if (count < k) {
                split.push(key);
            }
        }
        
        if (split.length === 0) {
            if (str.length > max) {
                max = str.length;
            }
            return;
        }
        
        var substr = str.split(new RegExp("[" + split.join("") + "]+"))
        for (var i = 0; i < substr.length; i++) {
            if (substr[i].length >= k && substr[i].length > max) {
                find(substr[i]);
            }
        }
    };
    
    find(s);
    
    return max;
};