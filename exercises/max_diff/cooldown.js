/* Design an algorithm to find the maximum profit. You may complete as many transactions as you like 
(ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day) */

var maxProfit = function(prices) {
    let b1 = -prices[0];
         
        let s2 = 0;
        let s1 = 0;
         
        for (let i = 1; i <= prices.length; i++) {
            let b0 = Math.max(b1, s2 - prices[i - 1]);
            let s0 = Math.max(s1, b1 + prices[i - 1]);
             
            b1 = b0;
            s2 = s1;
            s1 = s0;
        }
         
        return s1;
};