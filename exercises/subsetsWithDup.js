/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a-b);
    let res = [];
    
    let searchDFS = (curr = [], start = 0, len = 0) => {
        if(curr.length === len) res.push(curr);
        if(curr.length > len) return;
        
        for(let i=start; i<nums.length; i++){
            if(i!== start && nums[i] === nums[i-1]) continue; // skip the duplicated numbers
            if(nums[i] < curr[curr.length-1]) continue;  // skip smaller numbers
            searchDFS(curr.concat(nums[i]), i+1, len+1);
        }
    }
    searchDFS([],0,0);
    return res;
};