// Link-https://leetcode.com/problems/number-of-good-pairs/

var numIdenticalPairs = function(nums) {
    let count=0;
    let map = {};
     
     for(let i=0;i<nums.length;i++){
         if(!map.hasOwnProperty(nums[i])){
             map[nums[i]]=1
         }else{
             map[nums[i]]+=1;
         }
     }
     
     for(let i in map){
         if(map[i]>1){
             count+= (map[i]* ((map[i]-1)/2));
         }
     }
     
     return count;
 };