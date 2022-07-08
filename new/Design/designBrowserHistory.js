
/**
 * Link- https://leetcode.com/problems/design-browser-history/
 * @param {string} homepage
 */

 // ************************* using linked list ***************************************
class ListNode {
    constructor(val=null, prev=null, next=null){
        this.val = val;
        this.prev= prev;
        this.next = next;
    }
}

class DoublyList {
    constructor(head){
        this.head = head;
        this.tail = head;
        this.pt = 0;
        this.size = 1;
        this.curr = this.head;
    }
    
    insertNode(node){
        let lnode = new ListNode(node);

        if(this.pt===this.size-1){
            
            if(!this.head){
            this.head = lnode;
            this.tail= lnode;
            }else{
                this.tail.next= lnode;
                lnode.prev = this.tail;
                lnode.next= null;
                this.tail= lnode;
            }
            this.pt++; this.size++;
            
            this.curr=this.tail;
            
        }else{
            this.curr.next=null;
            this.curr.next = lnode;
            lnode.prev= this.curr;
            this.curr=lnode;
            this.tail=lnode;
            this.pt++;
            this.size=this.pt+1;
        }
    }
    
    moveBackward(steps){
        if((this.pt-steps)>0){
            while(steps > 0){
                steps--;
                this.pt--;
                this.curr = this.curr.prev;
            }
        }else{
            this.pt = 0;
            this.curr = this.head;
        }
    }
    
    moveForward(steps){
        if((this.pt+steps) < this.size-1){
            while(steps > 0){
                steps--;
                this.pt++;
                this.curr= this.curr.next;
            }
            
        }else{
            this.pt = this.size-1;
            this.curr = this.tail;
        }
    }
    
}


var BrowserHistory = function(homepage) {
  const node = new ListNode(homepage);
  this.list = new DoublyList(node);
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.list.insertNode(url);
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
   this.list.moveBackward(steps);
   return this.list.curr.val;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
   this.list.moveForward(steps);
    return this.list.curr.val;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

 // ************************* using Array **************************************

 /**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = [homepage];
    this.cp = 0;
 };
 
 /** 
  * @param {string} url
  * @return {void}
  */
 BrowserHistory.prototype.visit = function(url) {
     if(this.cp !== this.history.length-1){
         this.history.splice(this.cp+1);
     }
     
     this.history.push(url);
     this.cp++;
 };
 
 /** 
  * @param {number} steps
  * @return {string}
  */
 BrowserHistory.prototype.back = function(steps) {
     if((this.cp-steps)>=0){
         this.cp = this.cp-steps;
     }else{
         this.cp = 0;
     }
     return this.history[this.cp];
 };
 
 /** 
  * @param {number} steps
  * @return {string}
  */
 BrowserHistory.prototype.forward = function(steps) {
     if((this.cp+steps)<=this.history.length-1){
         this.cp = this.cp+steps;
     }else{
         this.cp = this.history.length-1;
     }
     return this.history[this.cp];
 };
 
 /** 
  * Your BrowserHistory object will be instantiated and called as such:
  * var obj = new BrowserHistory(homepage)
  * obj.visit(url)
  * var param_2 = obj.back(steps)
  * var param_3 = obj.forward(steps)
  */