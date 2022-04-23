/**
 * Link- https://leetcode.com/problems/min-stack/
 * Time- O(1);
 */
var MinStack = function() {
    this.stack = [];
    this.min= Infinity;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.min = val < this.min ? val : this.min;
    this.stack.push({val:val, min:this.min});
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // first pop and then set the min value
     if(this.stack.length) {
         this.stack.pop();
         
         // set min value
         if(this.stack.length) this.min = this.stack[this.stack.length-1]['min'];
         else this.min = Infinity;
     }else throw new Error('Stack is empty!');
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length) return this.stack[this.stack.length-1]['val'];
    else throw new Error('Stack is empty!');
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length-1]['min'];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */