/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    if(!nums.length && lower ===upper) return [String(lower)];
    else if(!nums.length && lower !==upper) return [lower + '->' + upper]
    let out = [];
    for(let i = 0;i<nums.length;i++){
        if(lower!==nums[i]){
             let toPush='';
             if(lower === nums[i]-1) toPush= String(lower);
             else toPush = lower + '->' + (nums[i]-1);
             out.push(toPush);
             lower=nums[i]+1;
        }else{
            lower++;
        }
    }
    if(lower < upper) out.push(lower+'->'+upper);
    if(lower == upper) out.push(String(lower));
    return out;
};
//******* optimised */
var findMissingRanges = function(nums, lower, upper) {
    if(!nums.length) return [formatRange(lower,upper)]
    let prev = lower-1;
    
    let out = [];
    for(let i = 0;i<nums.length;i++){
      let curr = nums[i];
      if(curr-prev > 1){
          out.push(formatRange(prev+1, curr-1));
      }
        prev=curr;
    }
    if(prev < upper) out.push(formatRange(prev+1,upper));
    return out;
};

const formatRange= (from, to)=>{
    if(from === to) return String(from);
    else return from + '->' + to
}