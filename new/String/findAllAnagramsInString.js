/**
 * Link- https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * T- O(n), S-O(n)
 */
var findAnagrams = function(s, p) {
    let map ={};
     
      for(let i=0;i<p.length;i++){
          if(!map.hasOwnProperty(p[i])){
             map[p[i]]=1;
           }else{
               map[p[i]]+=1;
           }
      }
  
      let i=0,j=0;let result= [];
      let count=p.length;
      
      while(j<s.length){
          if(map[s[j]] > 0){
              count--; 
          }
          
          map[s[j]]-=1;
          j++;
          
          if(count === 0) {
              result.push(i);
          }
          
          if((j-i) === p.length){
              if(map[s[i]]>=0) count++;
              map[s[i]]++;
              i++;
          }
      }
      
     return result;
  };