/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.win = [];
    this.size = size;
    this.sum = 0;
    return this;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if(this.win.length === this.size){
        this.sum = this.sum-this.win[0];
        this.win.shift();
    }
   this.win.push(val)
   this.sum = this.sum + val;
   
   return this.sum / this.win.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

 // ***** unoptimised ********
 /**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.win = [];
    this.size = size;
    
    return this;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if(this.win.length === this.size){
        this.win.shift();
    }
   this.win.push(val);
   const sum = this.win.reduce((a,b)=>a+b,0);
  // console.log('sum',this.win, sum, this.win.length)
   return sum /this.win.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */