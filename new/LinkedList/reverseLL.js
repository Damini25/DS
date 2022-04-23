/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};

// ******************** using three pointers *****************************

var reverseList = function(head) {
    if(!head) return null;
    let prev = null;
    let curr = head;
    let cnext = curr.next;

   while (curr) {
       curr.next = prev;
       prev = curr;
       curr = cnext;
       if(cnext){
           cnext = cnext.next;
       }
   }
   return prev;
};

// ********************* recursive solution ******************************

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return null;
    recur(head);
    return head;
    function recur(curr) {
        if (!curr.next) {
            head= curr;
            return; 
        }
         recur(curr.next);
         curr.next.next = curr;
         curr.next = null;  
         return;
    }
};
