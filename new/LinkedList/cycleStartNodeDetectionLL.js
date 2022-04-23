/**
 * Link- https://leetcode.com/problems/linked-list-cycle-ii/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * Trick -  diff(head ,starting of Cycle) === diff(meeting p ,starting of Cycle)
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fp = head;
    let sp = head;
    let cycleExist = false;
    while(fp!==null && fp.next!==null){
        fp=fp.next.next;
        sp=sp.next;
        
        if(sp === fp){ // meeting point
           cycleExist = true;
           break;
        }
    }
    
    if(!cycleExist) return null;
    else{
        //now diff(head ,starting ofCycle) === diff(meeting p ,starting ofCycle)
        fp = head; 
        while(fp!==sp){
            sp=sp.next;
            fp=fp.next;
        }
    }
    return sp;
};