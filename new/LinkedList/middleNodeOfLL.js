/**
 * Link - https://leetcode.com/problems/middle-of-the-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * T- O(n)
 */
var middleNode = function(head) {
    let fp = head;
    let sp = head;
    
    while(fp!==null && fp.next!== null){
        fp=fp.next.next;
        sp=sp.next;
    }
    return sp;
};