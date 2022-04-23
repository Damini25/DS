/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true
 * Explanation: s2 contains one permutation of s1 ("ba").
 * 
 * "hello"
"ooolleoooleh" // false
 */

 /**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length>s2.length) return false;
     let sMap1 ={};
    
    for(let i=0;i<s1.length;i++){
        if(!sMap1.hasOwnProperty(s1[i]))sMap1[s1[i]]=1;
        else sMap1[s1[i]]= sMap1[s1[i]]+1;
    };
    
    let rqLength =  s1.length;
    let right=0,left=0;
    while(right<s2.length){
        //console.log(right,left,rqLength);
        if(sMap1[s2[right]]>0)rqLength--;
        sMap1[s2[right]]--;
        if(rqLength===0) return true;
        right++;
        
        if((right-left) === s1.length){  // increment left most found element- need to found again
                if(sMap1[s2[left]]>=0) {     
                    rqLength++;
                }
                sMap1[s2[left]]++;
                left++;
        }
    }

    return false;
};
// ******* up-optimised using map******************
var checkInclusion = function(s1, s2) { // time - O(s*s) space - O(s)
    let sMap1 ={};
   for(let i=0;i<s1.length;i++){ // O(s1)
       if(!sMap1.hasOwnProperty(s1[i]))sMap1[s1[i]]=1;
       else sMap1[s1[i]]= sMap1[s1[i]]+1;
   };
   for(let i=0;i<s2.length-s1.length+1;i++){ //O(s2)
       let map ={};
       for(let j=i; j<s1.length+i; j++){ //O(s1)
           if(!map.hasOwnProperty(s2[j]))map[s2[j]]=1;
           else map[s2[j]]++;
       }
       if(matches(map))return true; //O(s1)
   };

   
   function matches(curr){
       for(let j in curr){
          if(curr[j]!==sMap1[j]) {
              return false;
          }
      }
       return true;
   }
   return false;
};