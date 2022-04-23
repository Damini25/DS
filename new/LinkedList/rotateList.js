/**
 * Link- https://leetcode.com/problems/rotate-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return null;
    
    // get size
    let size = 0;
    let curr = head;
    while(curr){
        size++;
        curr=curr.next;
    }
    
    // get rotated count
    let rotatedCount = k%size;
    if(!rotatedCount) return head;
    
    //get point from where rotation start
    let steps = size-rotatedCount;
    curr= head;
    let list2 = null;
    while(curr.next){
        if(steps===1){ // break the list
            list2 = curr.next;
            curr.next = null;
            curr = list2;
        }
        if(curr.next) curr=curr.next;
        steps--;
    }
    
    curr.next = head; // attach the second list to head
    head = list2;
    return list2;
};