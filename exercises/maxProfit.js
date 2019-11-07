/*
Say you have an array for which the i-th element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most k transactions.

Note:
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

Example 1:

Input: [2,4,1], k = 2
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
Example 2:

Input: [3,2,6,5,0,3], k = 2
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.
             Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
*/
var maxProfit = function(k, prices) {
    if(prices.length == 0) return 0;
    
    // When k becomes so much larger than the number of prices we can make transactions whenever.
    if(k > (prices.length / 2) ){
        let profit = 0;
        for(let i = 1; i < prices.length; i++){
            if(prices[i] > prices[i - 1]){
                profit += prices[i] - prices[i - 1];
            }
        }
        return profit;
    }
    else{
        let dp = new Array(prices.length).fill(0);
        let size = prices.length;
        for(let t = 1; t <= k; t++){
            let min = prices[0];
            let max = 0;
            for(let i = 0; i < size; i++){
                min = Math.min(min, prices[i] - dp[i]);
                max = Math.max(max, prices[i] - min);
                dp[i] = max
            }
        }
        return dp.pop();   
    }
};