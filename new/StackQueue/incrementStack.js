/**
 * Link- https://leetcode.com/problems/design-a-stack-with-increment-operation/
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack= new Array();
    this.size = maxSize;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.stack.length < this.size) {
        this.stack.push(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.stack.length) {
        const toPop = this.stack[this.stack.length-1];
        this.stack.pop();
        return toPop;
    }
    return -1;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    const len = this.stack.length < k ? this.stack.length : k;
    for(let i = 0; i < len ; i++){
        this.stack[i]+=val;
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */