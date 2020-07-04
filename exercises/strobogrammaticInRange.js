/*
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Write a function to count the total strobogrammatic numbers that exist in the range of low <= num <= high.

Example:

Input: low = "50", high = "100"
Output: 3 
Explanation: 69, 88, and 96 are three strobogrammatic numbers.
Note:
Because the range might be a large number, the low and high numbers are represented as string.
*/
var strobogrammaticInRange = function(low, high) {
    const map = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6',
    };
    const lowLen = low.length;
    const highLen = high.length;
    const keys = Object.keys(map);
    function findStrobogrammaticByLen(len) {
        let count = 0;
        function helper(even, str='') {            
            if(str.length === len) {
                if(parseInt(str) < parseInt(low) || parseInt(str) > parseInt(high)) return;
                count += 1;
                return;
            }
            for(let key of keys) {
                if(even) {
                    let temp = `${key}${str}${map[key]}`;
                    if(temp.length === len) {
                        if(key === '0') continue;
                    }
                    helper(even, temp);
                } else {
                    if(key === '6' || key === '9') continue;
                    helper(!even, `${key}`);
                }
            }
        }
        helper(len % 2 === 0);
        return count;
    }
    let final = 0;
    for(let i = lowLen; i < highLen+1; i++) {
        final += findStrobogrammaticByLen(i);
    }
    return final;
};