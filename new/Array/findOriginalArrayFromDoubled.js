/**
 * Link- https://leetcode.com/problems/find-original-array-from-doubled-array/
 * @param {number[]} changed
 * @return {number[]}
 */


 // Less optimised Memory leak****
var findOriginalArray = function(changed) {
    if(changed.length%2 !== 0) return [];
    let map={};
    
    for(let i=0;i<changed.length;i++){
        if(!map.hasOwnProperty(changed[i])){
            map[changed[i]] =1;
        }else{
            map[changed[i]]+=1;
        }
    }
  
    
   let res=[];
   while(Object.keys(map).length){
       let keys = Object.keys(map)
        const i = keys[0];
        let val = i * 2;
        if(map.hasOwnProperty(val)){
            if(map[i]>1) map[i]-=1;
            else {
                delete map[i];
            }
            
            if(map[val]>1) map[val]-=1;
            else {
                delete map[val];
            }
            res.push(i);
        }else{ 
            return [];
        }
    }

    return !Object.keys(map).length ? res : [];
};

// optimised, nlogn, n
/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    if(changed.length%2 !== 0) return [];
    let map={};
    let res=[];
    
    changed.sort((a,b)=>a-b);

     for(let i=0;i<changed.length;i++){
        if(!map.hasOwnProperty(changed[i])){
            map[changed[i]] =1;
        }else{
            map[changed[i]]+=1;
        }
     }
    
    for(let i=0;i<changed.length;i++){
        if(changed[i] === 0 && map[changed[i]]>1){
             map[changed[i]]-=2
             res.push(changed[i]);
        }
        
        if(changed[i] !== 0 && map[changed[i]]>=1 && map[changed[i]*2]>=1){
             map[changed[i]]-=1;
             map[changed[i]*2]-=1;
             res.push(changed[i]);
        }
        
        if(res.length === changed.length/2 ) return res;
    }
    
    return [];
};