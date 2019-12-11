/*
Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.

Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.

Could you do this in O(n) runtime?

Example:

Input: [3, 10, 5, 25, 2, 8]

Output: 28

Explanation: The maximum result is 5 ^ 25 = 28.
*/
var findMaximumXOR = function(nums) {
    var max = 0;
    var mask = 0;
    
    for (let i = 31; i >= 0; i--) {
        mask = mask | ( 1 << i);
        const set = new Set();
        for (let n of nums) {
            set.add(n & mask);
        }
        let temp = max | (1 << i);
        for (let prefix of set) {
            if (set.has(temp ^ prefix)) {
                max = temp;
                break;
            }
        }
    }
    
    return max;
};