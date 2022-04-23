/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // find mid;
    let sp = head;
    let fp = head;
    let prev = head;
    while(fp && fp.next){
        prev= sp;
        sp=sp.next;
        fp=fp.next.next;
        if(!fp){
            prev.next = null; // set first list end.next as null
        }
    }
   // console.log(head, sp);
    
    // reverse from mid (i.e - sp);
    prev = null;
    let mNext = sp.next;
    while(sp){
        sp.next = prev;
        prev= sp;
        sp = mNext;
        if(mNext) mNext= mNext.next;
    }
    
   // console.log(head, prev);
    
    // merge the lists as per condition
    let p1 = head;
    let p1Next = p1.next;
    let p2 = prev;
    let p2Next = p2.next;
    while(p2){
        p2.next = null;
        p1.next = p2;
        p2.next = p1Next;
        p1 = p1Next;
        p2 = p2Next ? p2Next : null;
        if(p1Next) p1Next=p1Next.next;
        if(p2Next) p2Next=p2Next.next;
    }
    return head;
};