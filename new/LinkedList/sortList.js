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
// ************* using mergeSort ****************
var sortList = function(head) {
    if(!head) return null;
    if(!head.next) return head;
    let [list1, list2] = breakFromMiddleLL(head);
    let first = sortList(list1);
    let second = sortList(list2);
    let newList = mergeList(first, second);
    return newList;
};

function breakFromMiddleLL(head){
    let fp = head;
    let sp = head;
    let prev =null;
    
    while(fp!==null && fp.next!==null){
        fp=fp.next.next;
        prev= sp;
        sp=sp.next;
    } 
    prev.next= null;
    return[head, sp];
}

function mergeList(list1, list2){
    if(!list1) return list2;
    if(!list2) return list1;
    let head3 = null;
    let list3 = null;
    
    while(list1 && list2){
        if(list1.val <= list2.val){
            if(!list3) {
                head3 = new ListNode(list1.val);
                list3 = head3;
            }
            else {
                list3.next = new ListNode(list1.val);
                list3 = list3.next;
            }
            
            list1=list1.next;
        }else{
             if(!list3) {
                 head3 = new ListNode(list2.val);
                 list3 = head3;
             }
             else {
                 list3.next = new ListNode(list2.val);
                 list3 = list3.next;
             }
             
             list2=list2.next;
        }
    }
    
    if(list1){
        while(list1){
            list3.next=new ListNode(list1.val);
             list3 = list3.next;
             list1=list1.next;
        }
    }else if(list2){
        while(list2){
             list3.next=new ListNode(list2.val);
             list3 = list3.next;
             list2=list2.next;
        }
    }
    
    return head3;
}

// ************************ bubble sort ********************

// giving time limit exceeded exception

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
var sortList = function(head) {
    if(!head) return null;
    let curr = head;
    let prev = head;
    let size = findSizeLL(head);
    bubbleSort(size-1, 0, head);
    
    function bubbleSort(row, col, curr){
       // console.log(head, row, col);
        if(row === 0) return;
        if(col<row){
            if(curr && curr.next && curr.val > curr.next.val){
               // console.log('test', curr.val, curr.next.val, prev.val);
                 if(curr === head){
                    let temp1 = curr.next;
                    let temp2 = curr.next.next;
                    curr.next = null;
                    temp1.next = curr;
                    curr.next = temp2;
                    head = temp1;
                    prev = temp1;
                }else{
                    let temp = curr.next.next;
                    curr.next.next = null;
                    prev.next = curr.next;
                    prev.next.next = curr;
                    curr.next = temp;
                    prev=prev.next;
                }
                return bubbleSort(row, col+1, curr);
            }
            prev = curr;
            return bubbleSort(row, col+1, curr.next);
        }else{
            return bubbleSort(row-1, 0, head);
        }
        return;
    }
    return head;
};

function findSizeLL(head){
    let size = 0;
    let curr = head;
    while(curr){
        size++;
        curr=curr.next;
    }
    return size;
}