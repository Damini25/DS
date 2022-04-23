/**
 * Link- https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/
 * @param {number} n
 * @param {number} k
 * Given-
S1 = "0"
Si = Si - 1 + "1" + reverse(invert(Si - 1)) for i > 1

Input: n = 3, k = 1
Output: "0"
Explanation: S3 is "0111001".
The 1st bit is "0".

 * @return {character}

Time- => at every step 2*i+1; => O(n* 2*n+1) => O(n^n);
Space- O(n)
 */
var findKthBit = function(n, k) {
    const str = findSk(n);
    return str[k-1];
    
    function findSk(n){
        if(n===1) return '0';
        let str1 = findSk(n-1);
        let str2 = reverseAndInvert(str1);
        str1 = str1+'1'+str2;
        return str1;
    }
    
    function reverseAndInvert(s){  //O(s);
        s = s.split('');
        let i=0,j=s.length-1;
        
        while(i<=j){
            
            if(i===j) {
                s[i] = s[i] ==='0'?'1':'0';
                break;
            };
            
            // reverse
            let temp=s[i];
            s[i]= s[j];
            s[j]= temp;
            
            // invert
            s[i]= s[i] =='0'?'1':'0';
            s[j]= s[j] =='0'?'1':'0';
            
            i++;
            j--;
        }
        return s.join('');
    }
    
};