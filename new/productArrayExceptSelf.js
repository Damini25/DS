/**
 * @param {number[]} nums
 * @return {number[]}
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 */
var productExceptSelf = function(nums) {
    let res=[];
    let pafter = 1;
    for(let i=nums.length-1;i>=0;i--){
        res[i]=pafter;
        pafter = pafter*nums[i];
    };
    
    pafter = 1; // is basically pBefore;
    for(let i=0;i<nums.length;i++){
        res[i]= pafter *  res[i];
        pafter = pafter*nums[i];
    }
   return res;
};
//***** little more space */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res=[];
    let tillNow=[]; let pafter = 1;
    
    for(let i=nums.length-1;i>=0;i--){
        tillNow[i]=pafter;
        pafter = pafter*nums[i];
    };
    
    pafter = 1; // is basically pBefore;
    for(let i=0;i<nums.length;i++){
        res[i]= pafter *  tillNow[i];
        pafter = pafter*nums[i];
    }
   return res;
};