/**
 * @param {number[]} w
 * O(log n)
 * [1,2,3,4,3]==>[1,2,2,3,3,3,4,4,4,4,3,3,3]=> generate range[1,3,6,10,13]=> genrate random => return max range index
 * // trick is expand the array
 */
var Solution = function(w) {
    this.w = w;
    this.probArr = [];
    let s = 0;
    for(let i=0;i<w.length;i++){
       s = s+ w[i]
       this.probArr.push(s);
    }
    this.sum= this.probArr[this.probArr.length-1];
    return this;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let tar =  Math.random()*this.sum; // generate a random b/w (0 to sum)
    
    // find the number which is greater than random one.
    let left=0, right=this.probArr.length-1;
   
    while(left<right){
        let mid = Math.floor((left+right)/2);
        if(this.probArr[mid] > tar ){
            right=mid;
        }else{
            left = mid+1;
        }
    }
    return left; // return the index of weight greater than random one, because if random comes in this range it should return index greater than that.
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */