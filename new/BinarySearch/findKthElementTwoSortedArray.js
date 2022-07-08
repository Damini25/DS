//Link- https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1#
// one solution can be using merge method T will  be - O(k)
// T- O(min(log m, log n))

//optimised solution trick- cut the smallest array and decide numbe rof element can be picked
// that donot break l1<=r2 && l2<=r1 condition
class Solution {
    kthElement(A,B,n,m,k){ 
        //code here
        if(A.length>B.length){
            return this.kthElement(B,A,m,n,k)
        }
        
        let low = Math.max(0, k-m) , high = Math.min(k, n);
        
        while(low<=high){
            let cut1 = Math.floor((low+high)/2);
            
            let cut2 = (k-cut1);
            let l1 =  cut1 === 0 ? -Infinity :A[cut1-1];
            let l2 =  cut2 === 0 ? -Infinity : B[cut2-1];
            let r1 = cut1 === n ? Infinity : A[cut1];
            let r2 =  cut1 === m ? Infinity : B[cut2];
            
            if(l1<=r2 && l2<=r1) return Math.max(l1,l2);
            
            if(l1>r2){
                high = cut1-1;
            }else {
                low = cut1+1;
            }
        }
        return 1;
    }
}