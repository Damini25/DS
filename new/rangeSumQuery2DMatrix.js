/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.rowDp = new Array(matrix.length).fill(1).map((item)=>new Array(matrix[0].length+1).fill(0));
    // this.rowDp = new Array()
     
     for(let i=0;i<matrix.length;i++){  // O(RC)
         for(let j=0;j<matrix[0].length;j++){
              this.rowDp[i][j+1] =   this.rowDp[i][j] + matrix[i][j];
         }
     }
     return this;
 };
 
 /** 
  * @param {number} row1 
  * @param {number} col1 
  * @param {number} row2 
  * @param {number} col2
  * @return {number}
  */
 NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
     let sum = 0;
     for(let i=row1;i<=row2;i++){ // O(R)
         sum = sum +  this.rowDp[i][col2+1]- this.rowDp[i][col1]
     }
     return sum;
 };
 
 /** 
  * Your NumMatrix object will be instantiated and called as such:
  * var obj = new NumMatrix(matrix)
  * var param_1 = obj.sumRegion(row1,col1,row2,col2)
  */

  // ***** un optimised******
  /**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix;
    return this;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    while(row1<=row2){
        let c = col1;
        while(c<=col2){
            let curr = this.matrix[row1][c];
            sum= sum + curr;
            c++;
        }
        row1++;
    }
    return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */