/*
Given a list of non-negative numbers and a target integer k, write a function to check if the array has a continuous subarray of size at least 2 that sums up to a multiple of k, that is, sums up to n*k where n is also an integer.

 

Example 1:

Input: [23, 2, 4, 6, 7],  k=6
Output: True
Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.
Example 2:

Input: [23, 2, 6, 4, 7],  k=6
Output: True
Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.
 

Note:

The length of the array won't exceed 10,000.
You may assume the sum of all the numbers is in the range of a signed 32-bit integer.
*/
const checkSubarraySum = (nums, k) => {
  // Handle special case when k === 0
  if (k === 0) {
    // We need to find at least 2 zero together
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] !== 0) continue;
      if (nums[i] === 0 && nums[i + 1] === 0) return true;
    }
    return false;
    /* We calculate for each sum of i (0 < i < nums.length), nums[0] + nums[1] + ... + nums[i]
    ** Denote the sum as sum[i], define mod[i] as sum[i] % k.
    ** If sum[i] % k === 0, then nums[0 to i] is the answer.
    ** Else if There exist some j (0 <= j < i - 1), that satisfied: mod[j] === mod[i],
    ** Then we can say, we've find the answer. And the sub array is nums[j+1 to i]
    */
  } else {
    let currentSum = nums[0];
    const modMap = {};
    modMap[0] = -1;
    for (let i = 1; i < nums.length; i++) {
      const nextSum = currentSum + nums[i];
      const mod = nextSum % k;
      if (modMap[mod] !== undefined) {
        console.log(`Sub Array is: from index ${modMap[mod] + 1} to ${i}`);
        return true;
      }
      const prevMod = currentSum % k;
      modMap[prevMod] = i - 1;
      currentSum = nextSum;
    }
    return false;
  }
};