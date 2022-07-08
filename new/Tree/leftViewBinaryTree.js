// Link- https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree
function leftView(root)
    {
        if(!root) return [];
        let result=[];
        let cStep = -1;
        recur(root, 0);
        return result;
        
        function recur(root, step){
            if(!root) return;
            
            if(step > cStep) {
                 result.push(root.data);
                 cStep++;
            }
            
            if(root.left) {
                recur(root.left, step+1);
            }
            if(root.right) {
                recur(root.right, step+1);
            }
        }
}