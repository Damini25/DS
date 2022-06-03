/**
 * Link- https://leetcode.com/problems/design-circular-queue/
 * @param {number} k
 */

 // ********* longer solution *********
var MyCircularQueue = function(k) {
    this.cq = [];
    this.size = k;
    this.front = -1;
    this.end = -1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) return false;
    if(this.isEmpty()){
        this.front++;
        this.end++;
        this.cq[this.front]=value;
    }else if(this.front<this.end){
        if((this.end % (this.size-1)) === 0) this.end = 0;
        else this.end++;
        
        this.cq[this.end] = value;
    }else{
        this.end++
        this.cq[this.end] = value;
    }
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {

    if(this.isEmpty()) return false;
    
    if(this.front === this.end) {
        this.front = -1;
        this.end = -1;
    }else{
        if(this.front<this.end){
           this.front++;
        }else{
            if((this.front % (this.size-1)) === 0) this.front = 0;
            else this.front++;
        }
    }
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
      if(this.front!==-1) return this.cq[this.front];
      return -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.end!==-1) return this.cq[this.end];
    return -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.front===-1 && this.end===-1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    if(this.isEmpty()) return false;
    const cond1 = (this.end >= this.front) && (this.end - this.front) === (this.size-1);
    const cond2 = (this.end < this.front) && (this.front-this.end )=== 1;
    
    return cond1 || cond2;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

 // ****** little short solution *****

 /**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.cq = new Array(k);
    this.len = 0;
    this.front = 0;
    this.end = -1;
    
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) return false;
    
    this.end = (this.end+1) % this.cq.length;
    this.cq[this.end] = value;
    this.len++;
    return true;

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) return false;
    
    this.front = (this.front+1) % this.cq.length;
    this.len--;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
      if(!this.isEmpty()) return this.cq[this.front];
      return -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(!this.isEmpty()) return this.cq[this.end];
    return -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return !this.len;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
   return this.len === this.cq.length;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */