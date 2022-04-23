/**
 * @param {number[][]} mat
 * @return {number[][]}
 * Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
 */
var diagonalSort = function(mat) { // m= rows, n=col
    
    let j=0; 
    while(j<mat[0].length){ //O(m)
         sortDiagnol(0,j); // O(n)
        j++;
    } // O(m*n);
    
    let i=0;
    while(i<mat.length){ //O(n)
         sortDiagnol(i,0);
        i++;
    } // O(m*n);
    
    function sortDiagnol(i,j){
        let arr = []
        let p=i,q=j;
        while(p<mat.length && q<mat[0].length){ //O(n)
            arr.push(mat[p][q]);
            q++;p++;
        }
        arr=arr.sort((a,b)=>a-b);
        for(let k=0; k<arr.length;k++){ ////O(n)
            mat[i][j] = arr[k];
            i++; j++;
        }
        // O(n+n);
    }
    return mat;
};