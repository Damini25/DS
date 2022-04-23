/**
 * Input
["MaxStack", "push", "push", "push", "top", "popMax", "top", "peekMax", "pop", "top"]
[[], [5], [1], [5], [], [], [], [], [], []]
Output
[null, null, null, null, 5, 5, 1, 5, 1, 5]
 */
var MaxStack = function() {
    this.stack = [];
    return this;
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    let max = -Infinity;
    for(let i=this.stack.length-1;i>=0;i--){
        max= Math.max(this.stack[i],max)
    }
    return max;
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    let max = this.peekMax();

    for(let i=this.stack.length-1;i>=0;i--){
        if(this.stack[i] === max){
            this.stack.splice(i,1);
            break;
        }
    };
    return max;
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */