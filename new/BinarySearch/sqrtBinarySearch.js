/**
 * @param {number} x
 * @return {number}
 * Input: x = 4
 *  Output: 2
 */
var mySqrt = function(x) {
    let left=0, right = Math.floor(x/2);
    if(x===0 || x===1)return x;
    
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        let sq = mid * mid;
        if (sq == x)return mid;
        if(sq < x){
            left = mid+1;
            if((left*left)>x) return mid;
        }else{
            right= mid-1;
        }
    }
    return x-1;
};