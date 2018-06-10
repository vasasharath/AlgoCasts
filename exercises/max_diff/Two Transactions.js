/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
*/

var maxProfit = function(prices) {
    let profit = [],result;
    for(let i = 0; i < prices.length; i++){
        profit[i] = 0;
    }
    let max_price = prices[prices.length - 1];
    for (let i = prices.length-2; i >= 0; i--)
        {
             
            // max_price has maximum of
            // price[i..n-1]
            if (prices[i] > max_price)
                max_price = prices[i];
     
            // we can get profit[i] by taking 
            // maximum of:
            // a) previous maximum, i.e., 
            // profit[i+1]
            // b) profit by buying at price[i]
            // and selling at max_price
            profit[i] = Math.max(profit[i+1],max_price - prices[i]);
        }
     
        /* Get the maximum profit with two
        transactions allowed After this loop,
        profit[n-1] contains the result */
        let min_price = prices[0];
         
        for (let i = 1; i < prices.length; i++)
        {
             
            // min_price is minimum price in
            // price[0..i]
            if (prices[i] < min_price)
                min_price = prices[i];
     
            // Maximum profit is maximum of:
            // a) previous maximum, i.e.,
            // profit[i-1]
            // b) (Buy, Sell) at (min_price,
            // price[i]) and add profit of 
            // other trans. stored in
            // profit[i]
            profit[i] = Math.max(profit[i-1],profit[i] + (prices[i] - min_price) );
        }
        if(prices.length < 2){
             result = 0;
        }
        else{
        result = profit[prices.length-1];
        }
         
        return result;
};