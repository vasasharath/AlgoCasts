/*
Given an integer array nums, return the number of range sums that lie in [lower, upper] inclusive.
Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j (i ≤ j), inclusive.

Note:
A naive algorithm of O(n2) is trivial. You MUST do better than that.

Example:

Input: nums = [-2,5,-1], lower = -2, upper = 2,
Output: 3 
Explanation: The three ranges are : [0,0], [2,2], [0,2] and their respective sums are: -2, -1, 2.
*/
var countRangeSum = function(nums, lower, upper) {
    if ( nums.length == 0 ) return 0;
    let sum = 0, sums = [],  res = 0;
    for ( let index in nums ) {
        sum += nums[index];
        if ( sum >= lower && sum <= upper ) {
            res++;
        };
        sums[index] = sum;
    };
    
    var mergeSort = function (arr) {
        if ( arr.length === 1 ) {
            return arr;
        };
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        
        return merge(
            mergeSort(left),
            mergeSort(right)
        );
    };
    
    var merge = function (left, right) {
        let result = [];
        let j = 0, k = 0, l = 0, m = 0;
        for ( let i = 0; i < left.length; i++ ) {
            while (j < right.length && right[j] - left[i] < lower){
                j++;
            };
            while (k < right.length && right[k] - left[i] <= upper){
                k++;
            };
            
            while( l < left.length && m < right.length ) {
                if ( left[l] <= right[m] ) {
                    result.push(left[l]);
                    l++;
                } else {
                    result.push(right[m]);
                    m++;
                };
            };
            
            while ( l < left.length ) {
                result.push(left[l]);
                l++;
            };
            
            while ( m < right.length ) {
                result.push(right[m]);
                m++;
            };
        
            res += k - j;
        };
        return result;
    }; 

    mergeSort(sums);
    
    return res;
};