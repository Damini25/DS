class Node {
    constructor(val= null){
      this.val = val;
      this.left= null;
      this.right=null;
    }
  }

  // Link- https://www.geeksforgeeks.org/preorder-postorder-and-inorder-traversal-of-a-binary-tree-using-a-single-stack/
  // T- O(n), S- O(n);
  
  function createAllTraversals(root){
      let pre =[], inOrder=[], post=[];
      let stack=[{curr:root, status:1}];
    
      while(stack.length){
        let {curr, status} = stack[stack.length-1];
        
        if(status===1){
          pre.push(curr.val);
          stack[stack.length-1].status=2;
          if(curr.left) stack.push({curr:curr.left, status:1});
        }else if(status===2){
          inOrder.push(curr.val);
          stack[stack.length-1].status=3;
          if(curr.right) stack.push({curr:curr.right, status:1});
  
        }else{
          post.push(curr.val);
          stack.pop();
        }
     }
    return {pre:pre, inOrder:inOrder , post:post};
  }
  
  
  let node = new Node(10);
  node.left = new Node(20);
  node.right = new Node(30);
  node.left.left = new Node(40);
  node.left.right = new Node(50)
  node.right.left = new Node(60);
  node.right.right = new Node(70);
  console.log(createAllTraversals(node))