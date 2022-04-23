class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}
class LL {
    constructor(){
        this.head = null;
    }

    insertUsingRecursion(val, index){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            newNode.next = null;
        }else{
            insert(0, this.head);
        }
        
        function insert(cInd, curr){
            if(cInd+1 === index) {
                let temp = curr.next;
                curr.next= newNode;
                newNode.next = temp;
                return;
            }
            if(curr.next){
                return insert(cInd+1, curr.next);
            }else{
                curr.next= newNode;
                newNode.next= null;
                return;
            }
        }
      
       console.log('head', this.head, index);
       return this.head;
    }


    insertRec2(index, newNodeVal){

        function insertNode(index, newNodeVal, curr){
            if(index===0){
                let newNode = new Node(newNodeVal, curr);
                return newNode;
            }
           curr.next = insertNode(index--, newNodeVal, curr.next);
           return curr;
        }
        return insertNode(index, newNodeVal, this.head);
    }
}

let list = new LL();
list.insertUsingRecursion(10, 0);
list.insertUsingRecursion(20, 1);
list.insertUsingRecursion(30, 2);
list.insertUsingRecursion(40, 3);
x
