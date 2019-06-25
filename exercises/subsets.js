/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/
const dfs = (nums, index, tempSet, result) => {
    if (index === nums.length) { result.push(tempSet.slice()); return;}
    
    dfs(nums, index + 1, tempSet, result);
    tempSet.push(nums[index]);
    dfs(nums, index + 1, tempSet, result);
    tempSet.pop();
}

const subsets = nums => {
    if (nums === null || nums.length === 0) { return []; } 
    
    let result = [];
    
    dfs(nums, 0, [], result);
    
    return result; 
}