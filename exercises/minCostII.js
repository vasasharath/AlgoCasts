/*
There are a row of n houses, each house can be painted with one of the k colors. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.

The cost of painting each house with a certain color is represented by a n x k cost matrix. For example, costs[0][0] is the cost of painting house 0 with color 0; costs[1][2] is the cost of painting house 1 with color 2, and so on... Find the minimum cost to paint all houses.

Note:
All costs are positive integers.

Example:

Input: [[1,5,3],[2,9,4]]
Output: 5
Explanation: Paint house 0 into color 0, paint house 1 into color 2. Minimum cost: 1 + 4 = 5; 
             Or paint house 0 into color 2, paint house 1 into color 0. Minimum cost: 3 + 2 = 5. 
Follow up:
Could you solve it in O(nk) runtime?
*/
const findPrevMin = (prevHouse, currColor) => {
    let min = Infinity
    for (let i = 0; i < prevHouse.length; i++) {
        if (i !== currColor && min > prevHouse[i]) {
            min = prevHouse[i]
        }
    }
    return min
}

var minCostII = function(costs) {
    if (!costs.length) return 0
    if (costs.length === 1) return Math.min(...costs[0])
    let prevCost = new Array(costs[0].length).fill(0)

    for (let house of costs) {
        let cost = []
        for (let c = 0; c < house.length; c++) {
			//To find the min cost of painting the current house a certain color, we will need: 
			//cost of painting the house with the current color
			//min cost of the previous house excluding the current color
            let minCost = house[c] + findPrevMin(prevCost, c)
            cost[c] = minCost
        }
        prevCost = cost
    }

    return findPrevMin(prevCost)
};