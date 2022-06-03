/**
 * Link- https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1/#
 * 
 * Celebrity is known to all, but itself doesn't know any body
 N = 3
M[][] = {{0 1 0},
         {0 0 0}, 
         {0 1 0}}
Output: 1
Explanation: 0th and 2nd person both
know 1. Therefore, 1 is the celebrity. 
 */

//***************** O(n*n) solution ***************************/ 
function celebrity(M, n) {
    for (let i = 0; i < n; i++) {
        let isICleb = true;
        for (let j = 0; j < n; j++) {
            if (M[i][j] === 1) {
                isICleb = false;
                break;
            }
        }
        if (isICleb) {
            for (let k = 0; k < n; k++) {
                if (k !== i && M[k][i] === 0) {
                    isICleb = false;
                }
            }
        }

        if (isICleb) return i;
    }
    return -1;
}

// ************ optimized O(n) solution *********************
function celebrity(M, n)
    {
        let s = [];
        for(let i=0;i<n;i++){
          s.push(i);
        }
        
       
        
        while(s.length > 1){
            const a = s[s.length-1];
            s.pop();
            const b = s[s.length-1];
            s.pop();
            
            if(M[a][b] === 1){
                s.push(b); // b can be a celebrity
            }else{
                s.push(a); // a can be a celebrity
            }
            
        }
         const k = s.pop();
         
         for(let i=0; i<n; i++){
          if(i!== k && M[i][k] === M[k][i]){
              return -1;
          }
        }
        
        return k;
    }