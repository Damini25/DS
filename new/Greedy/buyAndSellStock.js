//Link- https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// T-O(1), S-O(1)
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for(let i=0; i<prices.length; i++){
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i]-minPrice);
    }
    return maxProfit;
};

//T-O(n^2)
var maxProfit = function(prices) {
    
    return findProfit(0,-1,0);
    
    function findProfit(i, isBuy, profit ){
        //console.log('profit', profit);
        
        if( i>= prices.length) return profit;
        
        if(isBuy === -1){
            return findProfit(i+1, prices[i], profit);
        }else{
            if(prices[i] < isBuy){
                return findProfit(i+1, prices[i], profit);
            }else{
               // const sell = findProfit(i+1, -1, profit+(prices[i]-isBuy));
                const hold = findProfit(i+1, isBuy, profit);
                return Math.max(profit+(prices[i]-isBuy), hold);
            }
        }
    }
};