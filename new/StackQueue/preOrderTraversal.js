// Link- https://practice.geeksforgeeks.org/problems/preorder-traversal-iterative/1/#
function preOrder(root){
    //code here
    let curr = root;
    let stack = [];
    let result= [];
    while(true){
        if(curr){
            stack.push(curr);
            result.push(curr.key);
            curr = curr.left;
        }else{
            if(!stack.length) return result;
            let x = stack.pop();
            curr = x.right;
        }
    }
    return result;
}