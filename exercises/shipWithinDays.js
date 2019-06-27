/*
A conveyor belt has packages that must be shipped from one port to another within D days.

The i-th package on the conveyor belt has a weight of weights[i].  Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within D days.

 

Example 1:

Input: weights = [1,2,3,4,5,6,7,8,9,10], D = 5
Output: 15
Explanation: 
A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 
and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed. 
Example 2:

Input: weights = [3,2,2,4,1,4], D = 3
Output: 6
Explanation: 
A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4
Example 3:

Input: weights = [1,2,3,1,1], D = 4
Output: 3
Explanation: 
1st day: 1
2nd day: 2
3rd day: 3
4th day: 1, 1
 

Note:

1 <= D <= weights.length <= 50000
1 <= weights[i] <= 500
*/
var shipWithinDays = function(weights, D) {
    if (!weights || weights.length === 0 || D === 0) {
        return 0;
    }
     let totalWeight = 0;
    let maxWeight = weights[0];
    for (let i = 0;i < weights.length;i++) {
        if (weights[i] > maxWeight) {
            maxWeight = weights[i];
        }
        totalWeight += weights[i];
    }
    
    let start = maxWeight;
    let end = totalWeight;
    
    while (start < end) {
        const mid = start + Math.floor((end - start) / 2);
        // this is capacity we are trying for.
        let numberOfDaysNeeded = 1;
        let currentDayWeightTotal = 0;
        
        // Now go through all the weights
        for (let i = 0;i < weights.length;i++) {
            const weight = weights[i];
            if (weight + currentDayWeightTotal > mid) {
                // current day weight becomes more than our capacity, so increment the days,
                // reset current day sum
                numberOfDaysNeeded++;
                currentDayWeightTotal = 0;
            }
            currentDayWeightTotal += weight;
        }

        if (numberOfDaysNeeded > D) {
            // lets move right 
            start = mid + 1;
        } else {
            // lets move left
            end = mid;
        }
    }
    return start;
};