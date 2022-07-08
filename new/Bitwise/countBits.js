/**
 * Link- https://leetcode.com/problems/counting-bits/
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    
    let res=[0];
    for(let i=1;i<=n;i++){ //O(n)
        const bin = Number(i).toString(2);
        
        let count =0;
        let j=0,k=bin.length-1;
        while(j<=k){ //O(logn)
            if(j===k){
                if(bin[j]==='1')count++;
            }else{
                 if(bin[j]==='1')count++;
                 if(bin[k]==='1')count++;
            }
            j++;k--;
        }
        res[i]= count;
    }
    return res;
};