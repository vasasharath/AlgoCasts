/*
Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Note:

All numbers will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Example 2:

Input: k = 3, n = 9
Output: [[1,2,6], [1,3,5], [2,3,4]]
*/
var combinationSum3 = function(k, n) {
    let result = []
    for(let i = 1; i < n / k && i <= 9; i++) {
        result = result.concat(_combinationSum3(k - 1, n - i, [i]))
    }
    return result
};

function _combinationSum3 (k, n, array) {
    let result = []
    if(k == 1 && n > 0 && n <= 9) {
        result.push(array.concat(n))
    } else {
        for(let i = array[array.length - 1] + 1; i < n / k && i <= 9; i++) {
            result = result.concat(_combinationSum3(k - 1, n - i, array.concat(i)))
        }
    }
    return result
}