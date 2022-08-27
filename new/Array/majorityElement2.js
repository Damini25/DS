/**
 * @param {number[]} nums
 * @return {number[]}
 * Link- https://leetcode.com/problems/majority-element-ii/
 * T- O(n), S- O(1)
 */
var majorityElement = function(nums) {
    let n = Math.floor(nums.length/3);
    let count1 = 0 , count2=0;
    let cand1=null, cand2=null; let result= [];
    
    for(let i=0; i<nums.length; i++){
        
        if(count1!==0 && cand1 === nums[i]){
                count1+=1;
            
        }else if(count2!==0 && cand2 === nums[i]){
                 count2+=1;
            
        }else if(count1 === 0){
            count1=1;
            cand1= nums[i];
            
        }else if(count2===0){
             count2=1;
             cand2= nums[i];
            
        }
        else{
            count1--;
            count2--;
        }
    }
    
    count1 = 0, count2 = 0;
    for(let i=0;i<nums.length;i++){
        if(cand1===nums[i])count1++;
        else if(cand2===nums[i])count2++;
    }
    
    if(count1>n) result.push(cand1);
    if(count2>n) result.push(cand2);
    
    return result;
};