/**
 * @param {number[]} seats
 * @return {number}
 * Input: seats = [1,0,0,0,1,0,1]
Output: 2
Explanation: 
If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.
 */
var maxDistToClosest = function(seats) {
    let map = [];
    for(let i=0;i<seats.length;i++){
        if(seats[i] === 1) map.push(i);
    }
    
    let maxDist = 1;
    let j = 0;
   
    for(let i=0;i<seats.length;i++){
        if(i>map[j+1]) j=j+1;
        if(seats[i] === 0) {
            let left = Math.abs(i - map[j]);
            let dist = left;
            if(map[j+1]){
               let right = Math.abs(map[j+1]-i);
               dist = Math.min(left,right);
            }
            maxDist = Math.max(dist, maxDist);
        }
    }
    return maxDist;
};