/**
 * Link -https://leetcode.com/problems/fair-candy-swap/
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 * Input: aliceSizes = [1,1], bobSizes = [2,2]
 * Output: [1,2]
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let aliceTotal = 0;
        
    for(let i=0;i<aliceSizes.length;i++){ //O(m)
        aliceTotal+=aliceSizes[i];
    }
    
    let bobTotal = 0;
    for(let i=0;i<bobSizes.length;i++){ //O(n)
        bobTotal+=bobSizes[i];
    }
    
    
    let delta = (bobTotal-aliceTotal)/2 ;
    let map ={};
    
     for(let i=0;i<aliceSizes.length;i++){ ////O(m)
         map[aliceSizes[i]+delta]=aliceSizes[i];
     }
    
     for(let i=0;i<bobSizes.length;i++){  ////O(n)
        if(map[bobSizes[i]]) return [map[bobSizes[i]],bobSizes[i]];
     }
    
};