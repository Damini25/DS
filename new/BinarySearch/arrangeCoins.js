/**
 * Link-https://leetcode.com/problems/arranging-coins/
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    // let sum =0; let i=1;
    // while(i<=n){
    //     sum+=i;
    //     if(sum>n) break;
    //     i++;
    // }
    // return i-1;
    
    let start =1, end=n;
    
    while(start<=end){
        let mid = start+(Math.floor((end-start)/2));
        let sum = (mid * (mid+1))/2;
        if(sum === n) return mid;
        if(sum<n){
            start = mid+1;
        }else{
            end=mid-1;
        }
    }
    return end;
};