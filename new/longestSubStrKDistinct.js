// *************** optimised *************************

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if( k===0 ) return 0;
    if(k >= s.length) return s.length;
    
    let mLen = 0; let setSize = 0; let set = {};
    
    let left = 0; let right = left;
    while(right < s.length){
       
        if(set.hasOwnProperty(s[right])){
           set[s[right]] = right; 
            right++;
        }
        else if(!set.hasOwnProperty(s[right]) && setSize < k) {
                set[s[right]] = right; 
                right++;
                setSize++;
        }
        else if(!set.hasOwnProperty(s[right]) && setSize === k) {
                let keys = Object.values(set);
                let lowestPoint = Infinity;
                for(let i =0;i<keys.length;i++){
                    lowestPoint = Math.min(keys[i], lowestPoint);
                };
                delete set[s[lowestPoint]];
                left= lowestPoint+1;
                setSize--;
        }
        mLen = Math.max(mLen, right-left);
    }
    return mLen;
};

// **************** non optimised ***********************
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if( k===0 ) return 0;
    if(k >= s.length) return s.length;
    
    let mLen = 0; let cLen = 0; let set = new Set();
    
    let left = 0; let right = left;
    while(left <= right && right < s.length){
        
        if(set.has(s[right])){
            right++; cLen++;
        }
        else if(!set.has(s[right]) && set.size < k) {
                if(set.size ===1 && k!==1) left = right; 
                set.add(s[right]); cLen++;right++; 
        }
        else if(!set.has(s[right]) && set.size === k) {
                mLen = Math.max(mLen, cLen );
                set.clear();
                right = k==1 ? left++ : left;
                cLen = 0; 
        }
    }
    mLen = Math.max(mLen, cLen );
    return mLen;
};