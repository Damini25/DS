/**
 * Link- https://leetcode.com/problems/k-th-symbol-in-grammar/
 * @param {number} n
 * @param {number} k
 * @return {number}
 * 
 * Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.
 For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.

 Time- O(2^(k/2));
 */
var kthGrammar = function(n, k) {
    
    function recur(k){
        if(k === 1) return 0;
        let bit = recur(Math.ceil(k/2));
        return k%2===0 ? !bit : bit;
    }
    
    return recur(k);
};

/*
 if even then invert else kep same

                                        0 (k=1)
                            (k=1)0                  1(k=2)
                    (k=1)0         1(k=2)     (k=3)1        0(k=4)

*/