//User function Template for javascript

/**
 * Link- https://practice.geeksforgeeks.org/problems/check-if-subtree/1#
 * @param {Node} T
 * @param {Node} S
 * @returns {boolean}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    
    isSubTree(T, S)
    {
        let curr = T;
        let stack =[];
        while(true){
            if(curr){
                if(curr.data === S.data){
                    const res= this.checkForSubTree(curr, S);
                    if(res === 1) return 1;
                }
                stack.push(curr);
                curr=curr.left;
            }else{
                if(!stack.length) return 0;
                const last = stack.pop();
                curr=last.right;
            }
        }
        
        return 0;
    }
    
    checkForSubTree(curr, target){
        if(curr.data !== target.data) return 0;
        if(target.left){
            if(!curr.left || (curr.left.data !== target.left.data)){
                return 0;
            }else{
                const res = this.checkForSubTree(curr.left, target.left);
                if(res===0) return 0;
            }
        }else{
            if(curr.left) return 0;
        }
        if(target.right){
            if(!curr.right || (curr.right.data !== target.right.data)){
                return 0;
            }else{
                const res = this.checkForSubTree(curr.right, target.right);
                if(res===0) return 0;
            }
        }else{
            if(curr.right) return 0;
        }
        
        return 1;
    }
}