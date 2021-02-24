/*
Given an array of integers arr of even length, return true if and only if it is possible to reorder it such that arr[2 * i + 1] = 2 * arr[2 * i] for every 0 <= i < len(arr) / 2.

 

Example 1:

Input: arr = [3,1,3,6]
Output: false
Example 2:

Input: arr = [2,1,2,6]
Output: false
Example 3:

Input: arr = [4,-2,2,-4]
Output: true
Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].
Example 4:

Input: arr = [1,2,4,16,8,4]
Output: false
 

Constraints:

0 <= arr.length <= 3 * 104
arr.length is even.
-105 <= arr[i] <= 105
*/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(A) {
    if (A.length % 2 !== 0) {
        return false;
    }
    A.sort((a, b) => a - b);
    const map = new Map();
    for (const a of A) {
        if (a === 0) {
            continue;
        }
        if (!map.has(a)) {
            map.set(a, 0);
        }
        map.set(a, map.get(a) + 1);
    }
    
    for (const a of A) {
        if (a === 0 || map.get(a) === 0) {
            continue;
        }
        const target = a < 0 ? parseInt(a / 2) : a * 2;
        if (a < 0 && a % 2 !== 0 || !map.has(target) || map.get(a) > map.get(target) ) {
            return false;
        }
        map.set(target, map.get(target) - map.get(a));
         map.set(a, 0);
    }
    return true;
};