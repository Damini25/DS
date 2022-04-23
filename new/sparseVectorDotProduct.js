/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0) this[i] = nums[i];
    }
    return this;
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let v1 = this;
    let v2 =  vec;
    let vLen1 = Object.keys(v1).length;
    let vLen2 = Object.keys(v2).length;
    
    if(vLen1 > vLen2) return traverse(v1,v2);
    else return traverse(v2,v1);
    
    function traverse(obj1,obj2){
        let ans = 0;
        for(let i in obj1){
            if(obj2.hasOwnProperty(i)){
                ans += (obj2[i] * obj1[i]);
            }
        }
        return ans;
    }
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);