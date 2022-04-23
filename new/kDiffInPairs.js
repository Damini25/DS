/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * /// O(n),O(n)
 */
var findPairs = function(nums, k) {  
    let map={};
    for(let i =0;i<nums.length;i++){
       if(map[nums[i]])  map[nums[i]]++;
       else map[nums[i]]=1;
    }
    
   let count=0;
   let key = -1;
   for(let i in map){
       if(k===0){
           if(map[i]>1)count++;
       }else{
            key = Number(i)+k;
            if(map[key])count++;
       }
   }

    return count;
};