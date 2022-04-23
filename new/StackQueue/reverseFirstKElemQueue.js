// Link- https://practice.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1/#
// { Driver Code Starts
// Initial Template for javascript
// T- O(N), S - O(N)
'use strict';



// User function Template for javascript

/**
 * @param {Queue} q
 * @param {number} k
 * @returns {Queue}
*/

/*
class Queue{
    constructor(){
        this.arr = [];
        this.front = 0;
    }

    push(a){
        this.arr.push(a);
    }

    pop(){
        if(this.arr.length != this.front){
            let x = this.arr[this.front];
            this.front++;
            return x;
        }
        else
            return -1;
    }

    front_ele(){
        return this.arr[this.front];
    }

    empty(){
        if(this.arr.length != this.front)
            return false;
        else
            return true;
    }
}
*/

class Solution {
    
    // Function to reverse first k elements of a queue.
    modifyQueue(q, k) {
        let stack = [];
        let result = new Queue();
        let count = k;
        let size = q.length;
        
        for(let i=0; i<k; i++){
             stack.push(q.front_ele());
             q.pop();
        }
        
        for(let i=k-1; i>=0; i--){
            result.push(stack[i]);
        }
        
        
        count = size-k;
        while(!q.empty()){
            result.push(q.front_ele());
             q.pop();
        }
        return result;
    }
}