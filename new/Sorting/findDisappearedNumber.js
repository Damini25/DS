/**
 * @param {number[]} nums
 * @return {number[]}
 * Input: nums = [4,3,2,7,8,2,3,1]
 *  Output: [5,6]
 */
var findDisappearedNumbers = function(nums) {
    let i=0;
    while(i<nums.length){
        if(nums[i] !== i+1){
           if(nums[nums[i]-1] !== nums[i]) swap(i, nums[i]-1, nums);
           else i++;
        }else {
            i++;
        }
    }
    let res=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==i+1) res.push(i+1);
    }
    return res;
};

 function swap(first, sec, arr){
        let temp = arr[first];
        arr[first]= arr[sec];
        arr[sec] =temp;
  }

// ******** optimised *********************************
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let i=0;
    while(i<nums.length){
           if(nums[nums[i]-1] !== nums[i]) {
               swap(i, nums[i]-1, nums);
           }
           else{
               i++;
           } 
    }
    
    let res=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==i+1) res.push(i+1);
    }
    return res;
};

 function swap(first, sec, arr){
        let temp = arr[first];
        arr[first]= arr[sec];
        arr[sec] =temp;
  }