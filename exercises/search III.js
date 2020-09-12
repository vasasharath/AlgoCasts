/*
Given an integer array sorted in ascending order, write a function to search target in nums.  If target exists, then return its index, otherwise return -1. However, the array size is unknown to you. You may only access the array using an ArrayReader interface, where ArrayReader.get(k) returns the element of the array at index k (0-indexed).

You may assume all integers in the array are less than 10000, and if you access the array out of bounds, ArrayReader.get will return 2147483647.

 

Example 1:

Input: array = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: array = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

You may assume that all elements in the array are unique.
The value of each element in the array will be in the range [-9999, 9999].
The length of the array will be in the range [1, 10^4].
*/
var search = function (reader, target) {
    // binary search,
    // if smaller, then double the length
    // if it is in the range of [i, 2 * i], binary
    // 
    let i = 0;
    while (reader.get(i) < target) {
        i = i * 2 + 1;
    }
    console.log(i / 2, i);
    let start = parseInt(i / 2);
    let end = i * 2;
    while (start <= end) {
        const mid = parseInt((start + end) / 2);
        if (reader.get(mid) === target) {
            return mid;
        } else if (reader.get(mid) > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
};