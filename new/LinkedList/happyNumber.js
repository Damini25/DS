/**
 * Link- https://leetcode.com/problems/happy-number/
 * @param {number} n
 * @return {boolean}
 * 
 * 
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

// 
max length of digit  and its out put
1	9	81
2	99	162
3	999	243
4	9999  324

This means if a number goes till 4 digit it will be coverting back to or below 243

Complexity to determine the number of digits in a digit is O(log n) so function will always run O(log n)

T- O(log n)
 */

// ****** FLOYD cycle detecting algo *********
var isHappy = function(n) {
    
    function findX(n){
        let newN = 0 ;
        while(n){
            let x  = n % 10;
            n= Math.floor(n/10);
            newN+=(x*x);
        }
        return newN;
    }
    
    let sp = n, fp = n;
    
    while(fp !== 1){
        sp = findX(sp);
        fp = findX(findX(fp));
        
        if(fp === 1) return true;
        if(fp === sp) return false;
    }
    return true;
};

  // ********* using hash table **********************
var isHappy = function(n) {
    let map = {};
    
    function recur(n){
        if( n==1 ) return true;
        
        if(map[n]) return false;
        
        map[n] = 1;
        let newN = 0 ;

        while(n){
            let x  = n % 10;
            n= Math.floor(n/10);
            newN+=(x*x);
        }

        return recur(newN);
    }
    return recur(n);
};