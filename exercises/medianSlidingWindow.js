/*
Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

Examples:
[2,3,4] , the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Your job is to output the median array for each window in the original array.

For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position                Median
---------------               -----
[1  3  -1] -3  5  3  6  7       1
 1 [3  -1  -3] 5  3  6  7       -1
 1  3 [-1  -3  5] 3  6  7       -1
 1  3  -1 [-3  5  3] 6  7       3
 1  3  -1  -3 [5  3  6] 7       5
 1  3  -1  -3  5 [3  6  7]      6
Therefore, return the median sliding window as [1,-1,-1,3,5,6].

Note:
You may assume k is always valid, ie: k is always smaller than input array's size for non-empty array.
Answers within 10^-5 of the actual value will be accepted as correct.
*/
var medianSlidingWindow = function (nums, k) {
    const window = nums.slice(0, k).sort((x, y) => x - y);
    const resultLen = nums.length - k + 1;
    nums.push(0);

    function inSort(arr, val) {
        let i = 0;
        while (i < arr.length && arr[i] < val) {
            i++;
        }
        arr.splice(i, 0, val);
    }

    const medians = [];
    const rightIdx = k / 2 >>> 0;
    const leftIdx = k + ~rightIdx;
    for (let i = 0; i < resultLen; i++) {
        medians.push((window[leftIdx] + window[rightIdx]) / 2);
        window.splice(window.indexOf(nums[i]), 1);
        // keep window ordered
        inSort(window, nums[k + i]);
    }
    return medians;
};