/**
 * Link- https://leetcode.com/problems/sort-array-by-increasing-frequency/
 * @param {number[]} nums
 * @return {number[]}
 * T-O(m*n), S-O(n)
 */
var frequencySort = function(nums) {
    let freqObj = {};
    
    for(let i=0;i<nums.length;i++){ //O(n)
        if(!freqObj.hasOwnProperty(nums[i])) freqObj[nums[i]] = 1
        else freqObj[nums[i]]+=1;
    }
    
   let freqToKeyMap =  {}; 
   for(let i in freqObj){ //O(m*n)
       if(!freqToKeyMap.hasOwnProperty(freqObj[i])) {
           freqToKeyMap[freqObj[i]]= []
       }
       for(let j=0;j<freqObj[i];j++){ //O(n)
               freqToKeyMap[freqObj[i]].push(i)
       }
       freqToKeyMap[freqObj[i]].sort((a,b)=>a-b);
   }
    
    let res=[];
	for(let i in freqToKeyMap){ // O(m)
        for(let j=freqToKeyMap[i].length-1; j>=0; j--){//O(n)
            res.push(freqToKeyMap[i][j])
        }
	}
    return res;
};

// ********** little optmisied

var frequencySort = function(nums) {
    let freqObj = {};
    
    for(let i=0;i<nums.length;i++){ //O(n)
        if(!freqObj.hasOwnProperty(nums[i])) freqObj[nums[i]] = 1
        else freqObj[nums[i]]+=1;
    }
    
    return nums.sort((a,b)=>{
        if(freqObj[a]===freqObj[b]){
            return b-a;
        }else{
            return freqObj[a]-freqObj[b]
        }
    })
   
};