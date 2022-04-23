/**
 * Link- https://leetcode.com/problems/reverse-linked-list-ii/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * 
 * Reverse from left to right
 Input: head = [1,2,3,4,5], left = 2, right = 4
 Output: [1,4,3,2,5]
 */
var reverseBetween = function(head, left, right) {
    if(left === right) return head;
    
    let prev = null;
    let curr = head;
    let count = 1;
    
    while(curr){
          if(count >= left && count<= right){ // reverse the list
              let p = null; // prev
              let c = curr; // curr
              let cN = c.next; // next
              let firstNode = curr;
              while(left<=right){ // reverse linked list logic
                    c.next = p;
                    p = c;
                    c = cN;
                    if(cN) cN = cN.next;
                    left++;
               }
              firstNode.next = c;
              if(prev) prev.next = p; // if middle 
              else head = p;  // if from start
              break;
          }else{  // proceed;
              prev = curr;
              curr = curr.next;
          }
        count++;
    }
    
    return head;
};