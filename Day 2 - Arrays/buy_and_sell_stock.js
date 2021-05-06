// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Brute Force
// 2 for loops
// check profit for each element

const maxProfit = (prices) => {
    let maximumProfit = 0;
    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            if(prices[j]-prices[i]>maximumProfit){
                maximumProfit = prices[j]-prices[i];
            }
        }
    }
    return maximumProfit
}

// Best
// keep track of two things
// least price and maximum profit
// change least price only when a lesser element comes 

var maxProfit = function(prices) {
    let maximumProfit = 0;
    let leastPrice = Infinity
    for(let price of prices){
        if(price<leastPrice){
            leastPrice = price;
        }else if(price-leastPrice > maximumProfit){
            maximumProfit = price - leastPrice
        }
    }
    return maximumProfit
};