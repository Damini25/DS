/**
 * Link- https://leetcode.com/problems/palindromic-substrings/
 * @param {string} s
 * @return {number}
 */
// un optimised - T- O(n^3), S-O(1);
var countSubstrings = function(s) {
    let count=0;
    for(let i=0;i<s.length;i++){
        for(let j=i;j<s.length;j++){
            
            // check for palindrome
            if(s[i]===s[j]){
                let m=i, n=j;
                let isPalin = true;
                while(m<n){
                    if(s[m]!==s[n]){
                        isPalin = false;
                        break
                    }
                    m++;
                    n--;
                }
                if(isPalin) count++;
            }
            
        }
    }
    
    return count;
};

// optimised-> T-O(n^2), S-O(1)
var countSubstrings = function(s) {
    let count=0;
    for(let i=0;i<s.length;i++){
        
            let m = i, n=i; // check for odd palindrome substr
            while(m>=0 && n<s.length && s[m]===s[n]){
                m--;
                n++;
                count++;
            }
            
            m = i; n=i+1;// check for even palindrome substr 
            while(m>=0 && n<s.length && s[m]===s[n]){
                m--;
                n++;
                count++;
            }
    }
    
    return count;
};