/**
 * Return sum of ranges
 * @param {number[]} nums
 * Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]
 */
var NumArray = function(nums) {
    this.sumArray = new Array(nums.length).fill(nums[0])
    for(let i=0; i<nums.length-1; i++){
        this.sumArray[i+1] = nums[i+1] + this.sumArray[i]
    }
    return this;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left === 0) return this.sumArray[right];
    return this.sumArray[right]- this.sumArray[left-1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */