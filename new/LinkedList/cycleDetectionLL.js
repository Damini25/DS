/**
 * Link- https://leetcode.com/problems/linked-list-cycle/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * At some point if both pointers meet then there is a cycle else IF fp is null that means there is no cycle
 * @param {ListNode} head
 * @return {boolean}
 * Time - O(n)
 */
var hasCycle = function(head) {
    let fp = head;  // moves two step ahead
    let sp = head;  //// moves one step ahead
    while(fp){
       if(!fp.next || !fp.next.next) return false;
       fp = fp.next.next;
       sp = sp.next;
       if(fp === sp) return true;
    }
    return false;
};

var lengthOfCycle = function(head) {
    let fp = head;  // moves two step ahead
    let sp = head;  //// moves one step ahead
    let lenOfCycle = 0;
    while(fp){
       if(!fp.next || !fp.next.next) return false;
       fp = fp.next.next;
       sp = sp.next;
       if(fp === sp) { 
            lenOfCycle = 1; // moves sp so that it becomes equal to fp and calculate length of cycle
            sp = sp.next;
            while(sp!==fp) {
                sp = sp.next;
                lenOfCycle++;
            }
            break;
       }
    }
    return lenOfCycle;
};

