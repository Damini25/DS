/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * Time- O(max(x*x, y*y));
 * Space-  O(max(x*x, y*y));
 */
var minKnightMoves = function(x, y) {
    let moves = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
    let queue =[{val:[0,0], count:0}];
    let seen ={}
    while(queue.length){
        let curr = queue.shift();
        let [p,q] = curr.val;
        if(p===x && q===y) return curr.count;
        
        for(let i=0;i<moves.length;i++){
           let [m,n]= moves[i];
           let left = p+m;
           let right = q+n
           if(!seen[left+'_'+right]){
               queue.push({val:[left,right], count:curr.count+1});
               seen[left+'_'+right]=1;
           }
       }
    }
    return -1;
};

//******** */
/**
 * with less space
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    let moves = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
    let queue =[[0,0]];
    let seen ={}; let level = 0;
    
    while(queue.length){
        let size= queue.length;
        
        for(let j=0;j<size;j++){    
           let [p,q] = queue.shift();
            
           if(p===x && q===y) return level;
            
           for(let i=0;i<moves.length;i++){
               let [m,n]= moves[i];
               let left = p+m;
               let right = q+n
               if(!seen[left+'_'+right]){
                   queue.push([left,right]);
                   seen[left+'_'+right]=1;
                }
            }
        }
        level++;
    }
    return level;
};