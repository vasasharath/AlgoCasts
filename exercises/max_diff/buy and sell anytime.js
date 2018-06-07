/*Design an algorithm to find the maximum profit. You may complete as many transactions as you like 
(ie, buy one and sell one share of the stock multiple times). 
However, you may not engage in multiple transactions at the same time 
(ie, you must sell the stock before you buy again).*/

var maxProfit = function (prices) {
	let max = 0;
	for (let i = 1; i < prices.length; i++) {
		let temp = prices[i] - prices[i - 1];
		if (temp > 0) {
			max += temp;
		}
	}
	return max;
};