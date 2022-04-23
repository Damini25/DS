/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let len = 0;
    let curr = head;
    while(curr){
        len++;
        curr=curr.next;
    }
    curr = head; let count = 0; let firstMap = []; let maxVal = 0;
    while(curr){
        if(count<(len/2)) firstMap.push(curr.val);
        else maxVal = Math.max(maxVal, curr.val + firstMap[len-1-count]);
        count++;
        curr=curr.next;
    }
    return maxVal;
}; 

//----------optimized (never use array to solve LL  question)--------

var pairSum = function(head) {
     let len = 0;
     let curr = head;
     while(curr){
         len++;
         curr=curr.next;
     }
     // reverse second half of list
     curr = head; let count = 0;
     let p2 = null;
     while(curr){
         if(count === (len/2)-1){
             p2 = reverseLinkedList(curr.next);
             curr.next =  null ;
             break;
         }
         count++;
         curr=curr.next;
     }
     // check for maxVal;
     curr = head;let maxVal = 0;
     while(curr){
         maxVal = Math.max(maxVal, curr.val+p2.val);
         curr=curr.next;p2=p2.next;
     }
     return maxVal;
 };
 
 const reverseLinkedList = (head) => {
     let curr = head; let prev= null;
     while(curr){
         let temp = curr.next;
         curr.next= prev;
         prev = curr;
         curr = temp;
     }
     return prev;
 }