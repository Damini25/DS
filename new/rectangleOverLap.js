/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
// check for x and y intervals overlap seperately
var isRectangleOverlap = function(rec1, rec2) {

    return (isOverLap(rec1[0],rec1[2],rec2[0],rec2[2])) &&
          (isOverLap(rec1[1],rec1[3],rec2[1],rec2[3]))
    
    
   function isOverLap(left1, right1, left2, right2){
       return !(right1<=left2 || right2<=left1)
   }
};
// check coordinates
var isRectangleOverlap = function(rec1, rec2) {
    // if rectangle is a line
    if(rec1[0]=== rec1[2] || rec1[1] === rec1[3] ||
      rec2[0]=== rec2[2] || rec2[1] === rec2[3]){
       return false;
      }
    
    return !(rec1[0] >= rec2[2] ||  // right
             rec1[2] <= rec2[0] || // left
             rec1[3] <= rec2[1] ||  //bottom
             rec1[1] >= rec2[3]    // top
            );
};

