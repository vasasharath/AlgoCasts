/*Design an algorithm to find the maximum profit. You may complete as many transactions as you like 
(ie, buy one and sell one share of the stock multiple times). 
However, you may not engage in multiple transactions at the same time 
(ie, you must sell the stock before you buy again).*/

var maxProfit = function (prices) {
	let max = 0;
	for (let i = 1; i < prices.length; i++) {
        //calculate the profit at each iteration
		let temp = prices[i] - prices[i - 1];
        //if the profit is positive add it to the max
		if (temp > 0) {
			max += temp;
		}
	}
    //return the max profit
	return max;
};