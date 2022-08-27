// T- O(H)+O(H)+O(N)=> O(N)
function boundary(root) {
    //your goes code here
      const result= [];
      
      if(root.left || root.right) result.push(root.data);
      if(root.left) addLeftBoundary(root.left);
      addLeavesBoundary(root);
      if(root.right) addRightBoundary(root.right);
      
      
      return result;
      
      function addLeftBoundary(root){
        let curr = root;
         while(curr){
           if(curr.left){
                result.push(curr.data);
                curr=curr.left;
            }else if(curr.right) {
                result.push(curr.data);
                curr = curr.right;
            }else{
                break;
            }
        }
      }
      
      function addLeavesBoundary(root){
        if(!root.left &&!root.right) {
            result.push(root.data);
            return;
        }
        if(root.left){
          addLeavesBoundary(root.left);
        }
        if(root.right){
          addLeavesBoundary(root.right);
        }
      }
      
      
      function addRightBoundary(root){
        let temp =[], curr= root;
        while(curr){
           if(curr.right){
                temp.push(curr.data);
                curr=curr.right;
            }else if(curr.left) {
                temp.push(curr.data);
                curr = curr.left;
            }else{
                break;
            }
        }
        
        for(let i=temp.length-1;i>=0;i--){
            result.push(temp[i]);
        }
      }
   }