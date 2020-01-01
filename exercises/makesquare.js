/*
Remember the story of Little Match Girl? By now, you know exactly what matchsticks the little match girl has, please find out 
a way you can make one square by using up all those matchsticks. You should not break any stick, but you can link them up, 
and each matchstick must be used exactly one time.

Your input will be several matchsticks the girl has, represented with their stick length. 
Your output will either be true or false, to represent whether 
you could make one square using all the matchsticks the little match girl has.

Example 1:
Input: [1,1,2,2,2]
Output: true

Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
Example 2:
Input: [3,3,3,3,4]
Output: false

Explanation: You cannot find a way to form a square with all the matchsticks.
Note:
The length sum of the given matchsticks is in the range of 0 to 10^9.
The length of the given matchstick array will not exceed 15.
*/
var makesquare = function(nums) {
    var sum = nums.reduce((a, b) => a + b, 0);
    if (sum === 0 || sum % 4 !== 0) {
        return false;
    }
    
    var seen = new Array(nums.length);
    var canPartition = function(start, blocks, sum, target) {
        if (blocks === 1) {
            return true;
        }
        
        if (sum === target) {
            return canPartition(0, blocks - 1, 0, target);
        } else if (sum > target) {
            return false;
        }
        
        for (var i = start; i < nums.length; i++) {
            if (!seen[i]) {
                seen[i] = true;
                if (canPartition(i + 1, blocks, sum + nums[i], target)) {
                    return true;
                }
                seen[i] = false;
            }
        }
        return false;
    }
            
    return canPartition(0, 4, 0, sum / 4);
};