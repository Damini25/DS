/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * // T- O(n), S- O(1)
 */
var removeNthFromEnd = function(head, n) {
    let sp = head;
    let fp = head;
    let len= 1;
    
    while(sp && fp && fp.next){
        sp=sp.next;
        fp= fp.next.next;
        if(fp)len+=2;
        else len+=1;
    }
    
    let toRemove = len-n;
    sp = head;
    if(toRemove === 0) {
        return head.next;
    }
    while(toRemove>1){
        toRemove--;
        sp=sp.next;
    }
    sp.next= sp.next.next;
    return head;
};