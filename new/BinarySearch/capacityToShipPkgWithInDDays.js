/**
 * Link-https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 * Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
Output: 15
Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
 */
var shipWithinDays = function(weights, days) {
    let min =-Infinity, max= 0;
    for(let i =0;i<weights.length;i++){ // O(n)
        min= Math.max(min, weights[i]);
        max+=weights[i];
    }
    if(days === weights.length) return min;
    if(days === 1) return max;
    
    while(min<=max){ // O(log(n))
        let mid = min+ Math.floor((max-min)/2);
        let reqDays = 1;
        let sum=0;
        
        for(i=0;i< weights.length;i++){ //O(n)
            if((sum+weights[i])>mid){
                reqDays++;
                sum=weights[i];
            }else{
                sum+=weights[i];
            }
        }
        
        if(reqDays>days){
            min = mid+1;
        }else{
            max= mid-1;
        }
    }
    return min;
};