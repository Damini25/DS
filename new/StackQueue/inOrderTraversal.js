// Link- https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/

function inOrder(root){
    if(!root) return [];
    //code here
    let curr = root;
    let stack =[];
    let result = [];
    
    while(true){
        if(curr){
            stack.push(curr);
            curr=curr.left;
        }else {
            if(!stack.length) return result;
            let last = stack.pop();
            result.push(last.key);
            curr = last.right;
        }
    }
    return result;
}