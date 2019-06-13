/*
iven a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/
var topKFrequent = function(nums, k) {
  const map = {};
    const result = [];
    const bucket = Array(nums.length + 1).fill().map(() => []);
    
    for (let num of nums) {
        map[num] = ~~map[num] + 1;
    }
    
    for (let num in map) {
        bucket[map[num]].push(parseInt(num));
    }
    
    for (let i = nums.length; i >= 0 && k > 0; k--) {
        while (bucket[i].length === 0) i--;
        result.push(bucket[i].shift());
    }
    
    return result;   
};