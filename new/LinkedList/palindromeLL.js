/**
 * Link- https://leetcode.com/problems/palindrome-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
 
    // find mid node
    let mid = head;
    let fp = head;
    while(fp && fp.next){
        mid=mid.next;
        fp=fp.next.next;
    }

   // reverse from mid;
    let sec = mid;
    let prev = null;
    let mNext = mid.next;
    
    while(mid){
        mid.next = prev;
        prev= mid;
        mid = mNext;
        if(mNext) mNext = mNext.next;
    }
  
    //compare first and sec list
    curr = head;
    while(curr && prev){
        if(curr.val !== prev.val) return false;
        curr= curr.next;
        prev= prev.next;
    }
    return true;
};