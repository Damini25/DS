/**
 * Link- https://leetcode.com/problems/reverse-nodes-in-k-group/
 * 
 *  Input: head = [1,2,3,4,5], k = 2
    Output: [2,1,4,3,5]

    Reverse the every k nodes , if no k nodes left then leave those as it is.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let size = 0;
    let curr = head;
    while(curr){
        size++;
        curr=curr.next;
    }
    
    let reverseCount = Math.floor(size/k);
    
    let prevStart = null;
    curr = head;
    let cfirstNode = head; 
    
    // perform reverse operation on LL reverseCount times;
    while(reverseCount>0){
        let count = 0;
        
        // reverse the k nodes;
        let prev = null;
        let next = curr.next;
        while(count < k){    
            curr.next= prev; 
            prev = curr;
            curr = next;
            if(next) next= next.next;
            count++;
        }
        
        if(!prevStart){
            head = prev;
        }else{
            prevStart.next = prev; // attach reversed list start point to the previous left part; 
        }
        prevStart = cfirstNode;  // store the end value of current ll
        cfirstNode.next = curr;  // attach reversed list end point to the previous right part;
        cfirstNode = cfirstNode.next; // store the start value of next ll before reverse
        
        reverseCount--;
    }
    return head;
};