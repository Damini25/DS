/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length, col = matrix[0].length;
    let cmid = 0 + Math.floor((col-1-0)/2);
    
    let rStart = 0, rEnd=rows-1;
    
    while(rStart<rEnd){ // O(log m)
          if(rows===1) return binarySearchColumn(0, 0, col-1);
        
          if((rEnd - rStart) ===1) break;
          else {
            let rmid = rStart + Math.floor((rEnd-rStart)/2);
              
            if(matrix[rmid][cmid] === target) return true;
            if(matrix[rmid][cmid]<target){
                 rStart = rmid;
            }else{
                rEnd = rmid;
            }
          }
    }

     if(matrix[rStart][cmid] === target) return true;
     if(matrix[rEnd][cmid] === target)return true;
    
     if(target<= matrix[rStart][cmid-1]){
         if(binarySearchColumn(rStart, 0, cmid-1)) return true;
     }
     
     if(target>= matrix[rStart][cmid+1]){
         if(binarySearchColumn(rStart, cmid+1, col-1))  return true;
     }
    
     if(target<= matrix[rEnd][cmid-1]){
        if(binarySearchColumn(rEnd, 0, cmid-1))  return true;
     }
     
     if(target>= matrix[rEnd][cmid+1]){
        if(binarySearchColumn(rEnd, cmid+1, col-1))   return true;
     }
    
    return false;
    
    function binarySearchColumn(row, cStart, cEnd){ // O(log n)
        while(cStart<=cEnd){
            let cmid = cStart + Math.floor((cEnd-cStart)/2);
            if(matrix[row][cmid] === target) return true;
            else if(matrix[row][cmid]<target){
                cStart=cmid+1
            }else{
                 cEnd=cmid-1;
            }
       }
       return false;
    }
};