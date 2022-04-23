// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class Stack {

    constructor(size = 10) {
        this.data = new Array(size);
        this.ptr = -1;
    }

    push(item) {
        if (this.isFull()) throw new Error('Array out of bound!');
        this.data[++this.ptr] = item;
        return true;
    }

    pop() {
        if (this.isEmpty()) throw new Error('Cannot pop from an empty Array!');
        this.ptr--;
        return this.data.pop();
    }

    peek() {
        if (this.isEmpty()) throw new Error('Cannot pop from an empty Array!');
        return this.data[this.ptr];
    }

    shift(){
        if(this.isEmpty()) throw new Error('Cannot shift from an empty Array!');
        let i = 0;
        const removed = this.data[i];
        while(i<this.data.length){
            this.data[i-1]= this.data[i];
            i++;
        }
        this.ptr--;
        return removed;
   }

    isEmpty() {
        return this.ptr === -1;
    }

    isFull() {
        return (this.ptr === this.data.length - 1)
    }

}

let s = new Stack(5);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
console.log(s)

s.pop();
console.log(s)
s.pop();
console.log(s)
s.peek();
console.log(s.peek())















