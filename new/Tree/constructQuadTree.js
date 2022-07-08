/**
 * Link-https://leetcode.com/problems/maximum-number-of-points-with-cost/
 * Not able to solve
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let score = 0;
    
    let dp = new Array(points.length).fill([]).map(()=> new Array(points[0].length).fill(0));
    
     for(let j=0;j<points[0].length;j++){
         
         dp[0][j] = recur(1, j, points[0][j]);
         score = Math.max(score, dp[0][j]);
      //   console.log(dp, score)
     }
     //recur(1,2, points[0][0]);
   //  console.log(dp)

    return score;
    
    function recur(row, col, val){
       // console.log(row,col)
        
        if(row === points.length) {
             return val;
        }
        
        let score = 0;
        for(let j=0;j<points[0].length;j++){
         //   console.log('tes1', row, j, score);
            const _score = recur(row+1, j, val+points[row][j]);
            dp[row][j] = _score - Math.abs(col-j);
            score = Math.max(score, dp[row][j]);
          //  console.log('tes2',dp);
        }
    
        return score;
      //  console.log('tes3',dp);
    }
};