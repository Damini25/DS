/**
 * Link- https://leetcode.com/problems/stock-price-fluctuation/
 */

 // Time limit exceeded
var StockPrice = function() {
    this.stocks = {}
    this.price = {};
    this.maxTimeStamp = -Infinity;
    this.minPrice = Infinity;
    this.maxPrice = -Infinity;
    this.currPrice = null;
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
    if(this.stocks.hasOwnProperty(timestamp)){
        const _price = this.stocks[timestamp];
        if(this.price[_price] === timestamp){
            delete this.price[_price];
        }
    }
     this.maxTimeStamp = Math.max(this.maxTimeStamp, timestamp)
     this.stocks[timestamp]= price;
     this.price[price] = timestamp;
    
     this.currPrice =  this.stocks[this.maxTimeStamp];
     const priceKeys = Object.keys(this.price); // O(n)
     this.minPrice = priceKeys[0];
     this.maxPrice = priceKeys[priceKeys.length-1];
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
     return this.currPrice;
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
     return this.maxPrice;
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
     return this.minPrice;
};

/** 
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */