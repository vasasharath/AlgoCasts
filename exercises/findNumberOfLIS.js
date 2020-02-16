/*
Given an unsorted array of integers, find the number of longest increasing subsequence.

Example 1:
Input: [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequence are [1, 3, 4, 7] and [1, 3, 5, 7].
Example 2:
Input: [2,2,2,2,2]
Output: 5
Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.
Note: Length of the given array will be not exceed 2000 and the answer is guaranteed to be fit in 32-bit signed int.
*/
var findNumberOfLIS = function(nums) {
    if(!nums || nums.length === 0){
        return 0;
    }
    if(nums.length === 1){
        return 1;
    }
    
    const N = nums.length;
    const len = new Array(N);
    const cnt = new Array(N);
    let maxLen = 0, ans = 0;
    
    for(let i = 0; i < N; i++){
        len[i] = 1;
        cnt[i] = 1;
        for(let j = 0; j < i; j++){
            if(nums[j] < nums[i]){
                if(len[j] + 1 > len[i]){
                    len[i] = len[j] + 1;
                    cnt[i] = cnt[j];
                }else if(len[j] + 1 === len[i]){
                    cnt[i] += cnt[j];
                }
            }
        }
        if(len[i] === maxLen){
            ans += cnt[i];
        }else if(len[i] > maxLen){
            maxLen = len[i];
            ans = cnt[i];
        }  
    }
    return ans;
    
};