/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    return prices.map((a,i,arr)=>arr[i+1]-a).filter(num=>num>0).reduce((a,b)=>a+b, 0)
};