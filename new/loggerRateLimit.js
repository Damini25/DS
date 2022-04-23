
var Logger = function() {
    this.logger = {};
    return this;
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 * Input
["Logger", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage"]
[[], [1, "foo"], [2, "bar"], [3, "foo"], [8, "bar"], [10, "foo"], [11, "foo"]]
Output
[null, true, true, false, false, false, true]
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    const logger = this.logger;
    if(!logger.hasOwnProperty(message)){
        logger[message]= timestamp + 10;
        return true;
    }else{
        if(timestamp >= logger[message]) {
            logger[message] = timestamp + 10;
            return true;
        }else return false;
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */