/*
In a string composed of 'L', 'R', and 'X' characters, like "RXXLRXRXL", a move consists of either replacing one occurrence of "XL" with "LX", or replacing one occurrence of "RX" with "XR". Given the starting string start and the ending string end, return True if and only if there exists a sequence of moves to transform one string to the other.

 

Example 1:

Input: start = "RXXLRXRXL", end = "XRLXXRRLX"
Output: true
Explanation: We can transform start to end following these steps:
RXXLRXRXL ->
XRXLRXRXL ->
XRLXRXRXL ->
XRLXXRRXL ->
XRLXXRRLX
Example 2:

Input: start = "X", end = "L"
Output: false
Example 3:

Input: start = "LLR", end = "RRL"
Output: false
Example 4:

Input: start = "XL", end = "LX"
Output: true
Example 5:

Input: start = "XLLR", end = "LXLX"
Output: false
 

Constraints:

1 <= start.length <= 104
start.length == end.length
Both start and end will only consist of characters in 'L', 'R', and 'X'
*/
var canTransform = function(start, end) {
    let i = 0, j = 0
    for (; i < start.length && j < end.length; i++, j++) {
        while (end[j] === 'X') j++
        while (start[i] === 'X') i++
        if (start[i] !== end[j]) return false
        if (start[i] === 'R' && i > j || start[i] === 'L' && j > i) {
            return false
        }
    }
    while (i < start.length) {
        if (start[i] !== 'X') return false
        i++
    }
    while (j < end.length) {
        if (end[j] !== 'X') return false
        j++
    }
    return true
}