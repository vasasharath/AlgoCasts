/*
Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.

Return the least number of moves to make every value in A unique.

 

Example 1:

Input: [1,2,2]
Output: 1
Explanation:  After 1 move, the array could be [1, 2, 3].
Example 2:

Input: [3,2,1,2,1,7]
Output: 6
Explanation:  After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
It can be shown with 5 or less moves that it is impossible for the array to have all unique values.
 

Note:

0 <= A.length <= 40000
0 <= A[i] < 40000
*/
var minIncrementForUnique = function(A) {
  let nums;
  // below is faster than new Array(n)
  (nums = []).length = 40001;
  nums.fill(0);
  
  // Let's save each number's count in it's own (index + 1) as it's zero based
  for (let i = 0; i < A.length; i += 1) {
    nums[A[i]] += 1;
  }
  
  let lastNumberMoves = -1;
  
  let minimumMoves = 0;
  
  // Iterate over each above number and work on those > 1 occurence
  for (let i = 0; i < 40000; i += 1) {
    if (nums[i] == 0) {
      continue;
    }
    if (nums[i] > 1) {
      // let's retrieve the number's occurence to eliminate duplicates
      // to do this we have subract 1 from the count
      let movesToMakeItUnique = nums[i] - 1;
      
      // let's carryforward this movesToMakeItUnique to next number's occurence
      nums[i + 1] += movesToMakeItUnique;
      
      // increase move by movesToMakeItUnique
      minimumMoves += movesToMakeItUnique;
      
      lastNumberMoves = nums[i + 1];
    }
  }
  
  let finalMoves = lastNumberMoves - 1;
  
  for (let i = 1; i <= finalMoves; i += 1) {
    minimumMoves += i;
  }
  
  return minimumMoves;
  
};