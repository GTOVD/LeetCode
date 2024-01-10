function maxProfit(prices: number[]): number {
    let minPrice = Number.MAX_VALUE
    let maxProfit = 0
    
    for(let i = 0; i< prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i]
        } else if(prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice
        }
    }

    return maxProfit;

    // let result = 0
    // let optimizer = prices[0]

    // for(let i = 0; i< prices.length; i++) {
    //     if(optimizer < prices[i]) {
    //         continue
    //     } else {
    //         optimizer = prices[i]
    //     }
    //     for(let j = i; j< prices.length; j++) {
    //         if((prices[j]-prices[i]) > result)  {
    //             result = prices[j]-prices[i];
    //         }
    //     }
    // }

    // return result;
};