/**
 * Link- https://leetcode.com/problems/count-square-submatrices-with-all-ones/
 * @param {number[][]} matrix
 * @return {number}
 */
// Time- O(m * n * m(n+m))=>O(m^2 * n)
// Space- O(1);
var countSquares = function (matrix) {
  let m = matrix.length,
    n = matrix[0].length;
  let count = 0;

  for (let i = 0; i < m; i++) { //O(m)
    for (let j = 0; j < n; j++) { //O(n)
      if (matrix[i][j] === 1) {
        count++;

        // check for sides
        for (let side = 2; side <= m - i; side++) {  // O(m)
          let isSquare = true;
          let maxRow = i + side - 1,
            maxCol = j + side - 1;

          if (maxCol < n && maxRow < m) {
            /**
             * elem combinations
             * side 1-> [i+1,j],[i+1,j+1],[i,j+1]
             * side 2-> [i+2,j],[i+2,j+1],[i+2,j+2],[i+1,j+2],[i,j+2]
             **/
            for (let p = maxCol; p >= j; p--) {  // O(n)
              if (matrix[maxRow][p] === 0) {
                isSquare = false;
                break;
              }
            }

            for (let p = maxRow - 1; p >= i; p--) {  // O(m)
              if (matrix[p][maxCol] === 0) {
                isSquare = false;
                break;
              }
            }
          } else {
            isSquare = false;
          }

          if (!isSquare) {
            break;
          } else {
            count++;
          }
        }
      }
    }
  }

  return count;
};
