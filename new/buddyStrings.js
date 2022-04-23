/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length !== goal.length) return false;
     if(s !== goal){
        let first = -1, second=-1;
         
        for(let  i=0;i<s.length;i++){
            if(s[i]!==goal[i]){
                if(first===-1) first=i;
                else if(second===-1) second = i;
                else return false;
            }
        }
        return  second !== -1 && s.charAt(first) === goal.charAt(second) && 
         s.charAt(second) === goal.charAt(first);
    }else{
        // check for duplicate element
        let sMap = {};
        for(let i=0;i<s.length;i++){
            if(!sMap[s[i]]) sMap[s[i]] = 1;
            else {
               return true;
            }
        };
        return false;
    }
};

 // ******** un-optimised *************
var buddyStrings = function(s, goal) {
    if(s !== goal){
       
       // check for equality
        s1=s.split('').sort();
        g1=goal.split('').sort();
       
       //check for diff index count;
        if(s1.join('') === g1.join('')){
            let i = 0; let diff=0;
           while(i<s.length){
               if(s[i]!==goal[i]) diff++;
               if(diff > 2) return false;
               i++;
           }
           return true;
        }
       return false;
   }else{
       // check for duplicate element
       let sMap = {};
       for(let i=0;i<s.length;i++){
           if(!sMap[s[i]]) sMap[s[i]] = 1;
           else {
              return true;
           }
       };
       return false;
   }
};