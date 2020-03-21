/*
There are N children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
What is the minimum candies you must give?

Example 1:

Input: [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
Example 2:

Input: [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
             The third child gets 1 candy because it satisfies the above two conditions.
*/
var candy = function(ratings) {
    let res = 1;
    let totalc = ratings.length;
    let prevc = 1;
    for (let i = 1; i < totalc; i++) {
        if (ratings[i - 1] < ratings[i]) {
            prevc++;
            res += prevc;
        } else if (ratings[i - 1] == ratings[i]) {
            res++;
            prevc = 1;
        } else {
            let decStartIndex = i - 1;
            while (ratings[i - 1] > ratings[i] && i < totalc) {
                i++;
            }
            let c4start = Math.max(prevc, i - decStartIndex);  // A
            let cAfterStart = (i - decStartIndex) * (i - decStartIndex - 1) / 2;  // B
            res += c4start + cAfterStart - prevc;  // A + B - prev
            prevc = 1;
            i--; // move the pointer back to last decreasing rating
        }
    }
    return res;
};             