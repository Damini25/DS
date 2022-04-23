/**
 * 1.
 * [[00,01,02],
 *  [10,11,12],
 *  [20,21,22]]
 * user can move either right or down => calculate number of ways to reach from start to end of matrix
 * @param {*} matrix 
 */

function maze(matrix){
    let memo = {};
    return recur(0,0, matrix);
    

    function recur(i, j, matrix){

        if(i === matrix.length-1 && j === matrix[0].length-1) return 1;
        let key = `${i}_${j}`;
        if(memo.hasOwnProperty(key)) return memo[key]; 
        /**
         * one optimisation-> instead of AND we can use OR
         * if(i === matrix.length-1 || j === matrix[0].length-1) return 1;  whenever reaches end row or column there will be one path
         */
        let count = 0;

        if (j < matrix[0].length - 1) count += recur(i, j + 1, matrix);
        if (i < matrix.length - 1) count += recur(i + 1, j, matrix);

        memo[key] = count;
        return count;
    }
}

// 2. ****************** calculate paths ********* //

function maze(matrix){

    return recur(0,0, matrix , '');
    function recur(i, j, matrix, way){
        if(i === matrix.length-1 && j === matrix[0].length-1) return [way];

        let list = [];

        if (j < matrix[0].length - 1) list = [...list,...recur(i, j + 1, matrix, way+'R')];
        if (i < matrix.length - 1) list = [...list,...recur(i + 1, j, matrix, way+'D')];
        return list;
    }
}

console.log(maze([
   [00,01,02],
   [10,11,12],
   [20,21,22]
]))

//[ 'RRDD', 'RDRD', 'RDDR', 'DRRD', 'DRDR', 'DDRR' ]

//3. ****************************** right , down and diagnol move ****************************************

function mazeDiagnol(matrix){

    return recur(0,0, matrix);
    
    function recur(i, j, matrix ){
        if(i === matrix.length-1 && j === matrix[0].length-1) return 1

        let count = 0;

        if (j < matrix[0].length - 1 && i < matrix.length - 1) count += recur(i + 1, j+1, matrix);
        if (j < matrix[0].length - 1) count += recur(i, j + 1, matrix);
        if (i < matrix.length - 1) count += recur(i + 1, j, matrix);
        
        return count;
    }
}

console.log(mazeDiagnol([
   [00,01,02],
   [10,11,12],
   [20,21,22]
]))

// 4. ************************ maze with obstacles => 0 means river,  1 means land , you can go right and down ***********

function mazeWithObstacles(matrix){

    return recur(0, 0, matrix);

    function recur(i, j, matrix) {
      if (i === matrix.length - 1 && j === matrix[0].length - 1) return 1;

      let count = 0;

      if (j < matrix[0].length - 1 && matrix[i][j + 1] === 1) {
        count += recur(i, j + 1, matrix);
      }
      if (i < matrix.length - 1 && matrix[i + 1][j] === 1) {
        count += recur(i + 1, j, matrix);
      }

      return count;
    }
}

console.log(mazeWithObstacles([
   [1,1,1],
   [1,0,1],
   [1,1,1]
]))  // 2

// ***** with list
function mazeWithObstacles(matrix){

    return recur(0, 0, matrix, '');

    function recur(i, j, matrix, way) {
      if (i === matrix.length - 1 && j === matrix[0].length - 1) return [way];

      let list= [];
      

      if (j < matrix[0].length - 1 && matrix[i][j + 1] === 1) {
        list = [...list, ...recur(i, j + 1, matrix, way+'R')] 
      }
      if (i < matrix.length - 1 && matrix[i + 1][j] === 1) {
         list = [...list,... recur(i + 1, j, matrix, way+'D')] 
      }

      return list;
    }
}

console.log(mazeWithObstacles([
   [1,1,1],
   [1,0,1],
   [1,1,1]
])) // [ 'RRDD', 'DDRR' ]