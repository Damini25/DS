/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 * Input: piles = [3,6,7,11], h = 8
Output: 4
 */
var minEatingSpeed = function(piles, h) {
    let max= -Infinity; let min =1;
    for(let i=0;i< piles.length;i++){
        min = Math.min(min, piles[i])
        max= Math.max(max, piles[i]);
    }
  
    let l = min , r =max;
    let mid = 0; let hours = Infinity;
    while(l<=r){
        mid = Math.floor((l+r)/2);
        hours = hoursTakenForSpeed(mid);
        if(hours > h) l=mid+1;
        else r = mid-1;
    }
    
    return l;
    
    function hoursTakenForSpeed(speed){
        let minReqHour = 0;
        for(let i= 0; i<piles.length;i++){
            if(piles[i]<=speed) minReqHour++;
            else minReqHour += Math.ceil(piles[i]/speed);
        }
        return minReqHour;
    }
};