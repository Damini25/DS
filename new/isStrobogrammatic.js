/**
 * @param {string} num
 * @return {boolean}
 * num = "69"
 */
var isStrobogrammatic = function(nums) {
    let dict= { 0:'0', 1:'1', 6:'9', 8:'8', 9:'6' };
    let i=0,j=nums.length-1;
    while(i<=j){
        if(!dict.hasOwnProperty(nums[i]) || !dict.hasOwnProperty(nums[j])) return false;
        if(dict[nums[i]] !== nums[j]) return false;
        i++;j--;
    }
    return true;
};