/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

 // ******************** merged to new list ****************************
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;
    
    let head3 = null;
    let curr3 = null;
    
    while(list1 && list2){
        if(list1.val<=list2.val){
            if(!head3){
                head3 = new ListNode(list1.val);
                curr3= head3;
            }else{
                curr3.next = new ListNode(list1.val);
                curr3 = curr3.next;
            }
            list1 = list1.next;
        }else{
             if(!head3){
                head3 = new ListNode(list2.val);
                curr3 = head3;
            }else{
                curr3.next = new ListNode(list2.val);
                curr3 = curr3.next;
            }
            list2 = list2.next;
        }
    }
    // if(list1) curr3.next=list1
    // else if(list2) curr3.next=list2;

    while(list1) {
        curr3.next=list1;
        curr3 = curr3.next;
        list1 = list1.next;
    }
    
    while(list2) {
        curr3.next=list2;
        curr3 = curr3.next;
        list2 = list2.next;
    }
   
    return head3;
};

// *********************** merged to list1 *********************
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    
    let curr1= list1, curr2= list2;
    let prev1 = null;
    
    while(curr1 && curr2){
        if(curr2.val <= curr1.val){
           let temp = curr2.next;
           curr2.next= null;
           if(prev1) prev1.next = curr2;
           curr2.next = curr1;
           if(!prev1) list1 = curr2;
           prev1 = curr2;
           curr2 = temp;
         }else{
            prev1 = curr1;
            curr1= curr1.next;
        }
       
    }
    
    if(curr2) prev1.next = curr2;
    return list1;
};