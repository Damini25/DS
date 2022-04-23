/**
 * BackTracking
 * means when you are going back(returning) you are reverting your changes that you made previously
 * @param {*} matrix 
 */
function mazeWithFourDir(matrix){

    let memo = {};
    return recur(0,0, matrix, '', '');
    
    function recur(i, j, matrix, way){

        let key = `${i}_${j}`;
        if(i === matrix.length-1 && j === matrix[0].length-1) return [way];
        
        let list=[];
        memo[key] = 1;
        
        if (j < matrix[0].length - 1  && !memo[`${i}_${j+1}`]) list=[...list,...recur(i, j + 1, matrix,way+'R')] ;
      
        if (i < matrix.length - 1  && !memo[`${i+1}_${j}`]) list=[...list,...recur(i + 1, j, matrix,way+'D')] ;
        
        if (i > 0  && !memo[`${i-1}_${j}`]) list=[...list,...recur(i - 1, j, matrix,way+'U')] ;
       
        if (j > 0  && !memo[`${i}_${j-1}`]) list=[...list,...recur(i, j - 1, matrix,way+'L')] ;
        
        delete memo[key];
        
        return list;
    }
}
console.log(mazeWithFourDir([
   [00,01,02],
   [10,11,12],
   [20,21,22]
]))

// Output-
// [
//     'RRDD',     'RRDLDR',
//     'RRDLLDRR', 'RDRD',
//     'RDDR',     'RDLDRR',
//     'DRRD',     'DRDR',
//     'DRURDD',   'DDRR',
//     'DDRURD',   'DDRUURDD'
//   ]

// ************ without using any aux space ********* modify current matrix ******** //

function mazeWithFourDir(matrix){

    return recur(0,0, matrix, '', '');
    
    function recur(i, j, matrix, way){
  
        let key = `${i}_${j}`;
        if(i === matrix.length-1 && j === matrix[0].length-1) return [way];
        
        let list=[]
       matrix[i][j] = 1; // mark current path visited
        
        if (j < matrix[0].length - 1  && !matrix[i][j+1]) list=[...list,...recur(i, j + 1, matrix,way+'R')] ;
      
        if (i < matrix.length - 1  &&!matrix[i+1][j]) list=[...list,...recur(i + 1, j, matrix,way+'D')] ;
        
        if (i > 0  && !matrix[i-1][j]) list=[...list,...recur(i - 1, j, matrix,way+'U')] ;
       
        if (j > 0  && !matrix[i][j-1]) list=[...list,...recur(i, j - 1, matrix,way+'L')] ;
        
       matrix[i][j] = 0; // revert  current path changes
        
        
        return list;
    }
}

console.log(mazeWithFourDir([
   [0,0,0],
   [0,0,0],
   [0,0,0]
]))

//***** print path as well */

function mazeWithFourDir(matrix){

    let path = new Array(matrix.length).fill([]).map(item => new Array(matrix[0].length).fill(0))
  
      return recur(0,0, matrix, '', path, 1);
      
      function recur(i, j, matrix, way, path, step){
    
          if(i === matrix.length-1 && j === matrix[0].length-1) {
              path[i][j] = step;
              console.log(path)
              return [way];
          }
          
         let list=[]
         matrix[i][j] = 1; // mark current path visited
         path[i][j] = step;
          
          if (j < matrix[0].length - 1  && !matrix[i][j+1]) list=[...list,...recur(i, j + 1, matrix,way+'R', path, step+1)] ;
        
          if (i < matrix.length - 1  &&!matrix[i+1][j]) list=[...list,...recur(i + 1, j, matrix,way+'D', path, step+1)] ;
          
          if (i > 0  && !matrix[i-1][j]) list=[...list,...recur(i - 1, j, matrix,way+'U', path, step+1)] ;
         
          if (j > 0  && !matrix[i][j-1]) list=[...list,...recur(i, j - 1, matrix,way+'L', path, step+1)] ;
          
         matrix[i][j] = 0; // revert  current path changes
         path[i][j] = 0;
         step = 0
          
          
          return list;
      }
  }
  console.log(mazeWithFourDir([
     [0,0,0],
     [0,0,0],
     [0,0,0]
  ]))

Output = [ [ 1, 2, 3 ], [ 0, 0, 4 ], [ 0, 0, 5 ] ]
[ [ 1, 2, 3 ], [ 0, 5, 4 ], [ 0, 6, 7 ] ]
[ [ 1, 2, 3 ], [ 6, 5, 4 ], [ 7, 8, 9 ] ]
[ [ 1, 2, 0 ], [ 0, 3, 4 ], [ 0, 0, 5 ] ]
[ [ 1, 2, 0 ], [ 0, 3, 0 ], [ 0, 4, 5 ] ]
[ [ 1, 2, 0 ], [ 4, 3, 0 ], [ 5, 6, 7 ] ]
[ [ 1, 0, 0 ], [ 2, 3, 4 ], [ 0, 0, 5 ] ]
[ [ 1, 0, 0 ], [ 2, 3, 0 ], [ 0, 4, 5 ] ]
[ [ 1, 4, 5 ], [ 2, 3, 6 ], [ 0, 0, 7 ] ]
[ [ 1, 0, 0 ], [ 2, 0, 0 ], [ 3, 4, 5 ] ]
[ [ 1, 0, 0 ], [ 2, 5, 6 ], [ 3, 4, 7 ] ]
[ [ 1, 6, 7 ], [ 2, 5, 8 ], [ 3, 4, 9 ] ]
[
  'RRDD',     'RRDLDR',
  'RRDLLDRR', 'RDRD',
  'RDDR',     'RDLDRR',
  'DRRD',     'DRDR',
  'DRURDD',   'DDRR',
  'DDRURD',   'DDRUURDD'
]