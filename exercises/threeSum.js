/*
Given an array nums of n integers, are there elements a, b, c in nums such that 
a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/
const threeSum = (nums) => {
  let [ solution, left, right ] = [[], 0, nums.length-1];
  if(nums.length < 3 ) return solution;
  //Sorting the array allows us to apply similar methods of what 2Sum question answered earlier on
  nums.sort((a,b)=>{return a-b}) 
  
  for(let [index, number] of nums.entries()){
      if(number > 0) return solution; //If target is greater than 0 and things are sorted, no point going on
      if(number === nums[index-1]) continue; // Skip though repeated numbers as the target
      left = index+1; //resetting left flag
      right = nums.length-1;
      let temp = 0;
      while (left < right){  
          temp = number + nums[left] + nums[right];
          if (temp === 0){
              solution.push([number, nums[left], nums[right]])
              left++;
              right--;
              while(left < right && nums[left] == nums[left-1]){
                  left++;
              }
              while(left < right && nums[right] == nums[right+1]){
                  right--;
              }
          }else if (temp < 0){
              left++;
          }else if (temp > 0){
              right--;
          }
      }
  }
  return solution;
};