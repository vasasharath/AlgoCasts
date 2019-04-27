/*
A string S of lowercase letters is given. We want to partition this string into as many parts as 
possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
Note:

S will have length in range [1, 500].
S will consist of lowercase letters ('a' to 'z') only.
*/
var partitionLabels = function(S) {
   var intervals = [];
    var mapLetter = Object.create(null);
    for (var i = 0; i < S.length; i++) {
        if (mapLetter[S[i]] === undefined) {
            mapLetter[S[i]] = intervals.length;
            intervals.push([i, i]);
        } else {
            intervals[mapLetter[S[i]]][1] = i;
        }
    }
    
    var max = 0;
    var index = 0;
    var result = [];
    var lastIndex = intervals.length - 1;
    
    while (index < intervals.length) {
        for (var i = index; i < intervals.length; i++) {
            max = Math.max(max, intervals[i][1]);
            if (intervals[i][0] < max && i !== lastIndex) {
                if (intervals[i + 1][0] > max) {
                    result.push(max + 1 - intervals[index][0]);
                    index = i + 1;
                    break;
                }
            } else {
                result.push(max + 1 - intervals[index][0]);
                index = i + 1;
                break;
            }
        }
    }
    
    return result;
};