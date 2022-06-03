/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    
    const res = [];
    
    for(let i =0; i<indices.length; i++){
        
        let start = indices[i];
        const isMatch = s.slice(start, start+sources[i].length) === sources[i];
        
        if(isMatch){
            res[start] = targets[i];
            
            for(let j = start+1; j<start+sources[i].length; j++){
                res[j] = '';
            }
        }
           
    }
    
    for(let i =0; i<s.length; i++){
        if(res[i] === undefined){
            res[i] = s[i];
        }
    }
  return res.join('');
};