/*
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. 
That means the first house is the neighbor of the last one. Meanwhile, 
adjacent houses have security system connected and it will automatically 
contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, 
determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
             because they are adjacent houses.
Example 2:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
*/
var rob = function(nums) {
  if(nums.length === 1) return nums[0];
  let prevA1 = 0, prevA2 =0; //store result from prev house and prev 2 houses for resultA
  let prevB1 = 0, prevB2 =0; //store result from prev house and prev 2 houses for resultB
  
  let resultA=0, //produce 2 solutions and take the max
      resultB=0;
        
  for(let i = 0; i < nums.length; ++i){
    if(i < nums.length- 1) {
        resultA = Math.max(prevA1, nums[i] + prevA2);
        prevA2 = prevA1; //update for the next iteration: the prev house as prev 2 houses
        prevA1 = resultA; //update for the next iteration: the current house as prev house
    }
    if(i > 0) {
        resultB = Math.max(prevB1, nums[i] + prevB2);
        prevB2 = prevB1;
        prevB1 = resultB;  
    }
  }

  return Math.max(resultA, resultB);
};