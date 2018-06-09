 /*
 Your are given an array of integers prices, for which the i-th element is the price of a given stock on day i;
 and a non-negative integer fee representing a transaction fee.

You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction. 
You may not buy more than 1 share of a stock at a time (ie. you must sell the stock share before you buy again.)

Return the maximum profit you can make.
 */
var maxProfit = function(prices, fee) {
    let sell = 0, buy = -prices[0], maxSell = 0;
    for(let i = 1; i < prices.length;i++){
        sell = Math.max(sell, buy+prices[i]-fee);//sell
        buy = Math.max(buy, sell-prices[i]);//buy
        maxSell = Math.max(sell, maxSell);
    }
    return maxSell;
};