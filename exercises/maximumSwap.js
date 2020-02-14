/*
Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. Return the maximum valued number you could get.

Example 1:
Input: 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
Example 2:
Input: 9973
Output: 9973
Explanation: No swap.
Note:
The given number is in the range [0, 108]
*/
var maximumSwap = function(num) {
    var numStr = num.toString();
    
    for (var i = 0; i < numStr.length; i++) {
        var nbr = numStr[i];
        var index = i;
            
        for (var x = numStr.length - 1; x > i; x--) {
            if (numStr[x] > nbr) {
                nbr = numStr[x];
                index = x;
            }
        }
        
        if (nbr != numStr[i]) {
            var arr = numStr.split('');
            
            var tmp = arr[i];
            
            arr[i] = arr[index];
            arr[index] = tmp;
            
            return parseInt(arr.join(''));
        }
    }
    return num;
};