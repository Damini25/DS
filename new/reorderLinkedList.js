/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Input: head = [1,2,3,4]
Output: [1,4,2,3]
* time- O(l)
* space- O(1)
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let curr = head;
   
   // find mid
   let count=0;
    while(curr){  // O(l) // length of LL
        count++;
        curr=curr.next;
    };
    let mid = Math.ceil(count/2);
    
    // break list
    curr = head; count=0;
    let newList =null;
    while(curr){  // O(l/2)
        count++;
        if(count === mid){
            newList = curr.next;
            curr.next = null;
            break;
        }else curr=curr.next;
    }
    
    // reverse list
    newList = reverseLinkedList(newList);  // O(l/2)
    
    // merge list
    let c2 = newList;
    let c1 = head;
    while(c2){   // O(l/2)
        let temp1 = c1.next;
        let temp2 = c2.next;
        c2.next = null;
        c1.next=c2;
        c2.next=temp1;
        c2= temp2;
        c1= temp1;
    }
    return head;
};

function reverseLinkedList(head){
    let newHead = head;
    let curr = newHead;
    let prev = null;
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}