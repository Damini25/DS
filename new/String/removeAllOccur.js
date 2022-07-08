/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 * T-O(N*N)
 * S-O(N)
 */
var removeOccurrences = function(s, part) {
    let i=0;
     while(i<s.length){ //O(m)
             if(s[i] === part[0]){
                 if(checkForMatch(s,i,part)){
                     s=s.replace(part,"");
                     i=0;
                 }else i++;
             }else i++;
     }
     return s;
 };
 
 function checkForMatch(s,sI,part){ //O(n)
     for(let i=0; i<part.length; i++ ){
         if(s[sI+i]!==part[i]) return false;
     }
     return true;
 }
 