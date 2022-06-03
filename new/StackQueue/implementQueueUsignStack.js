/**
 * Link- https://leetcode.com/problems/implement-queue-using-stacks/
 */
var MyQueue = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.empty()) throw new Error('Cannot get from empty Queue.');
    const toPop = this.queue[0];
    for(let i = 0 ; i<this.queue.length-1;i++){
        this.queue[i] = this.queue[i+1];
    }
    this.queue.length--;
    return toPop;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.empty()) return this.queue[0];
    else throw new Error('Cannot get from empty Queue.');
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.queue.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */