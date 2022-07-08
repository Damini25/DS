/**
 * Link- https://leetcode.com/problems/count-substrings-that-differ-by-one-character/
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function(s, t) {
    let sSub={}; let tSub=[];

for(let i=0;i<s.length;i++){
    for(let j=i;j<s.length;j++){
        let key=s.substring(i,j+1)
        if(!sSub.hasOwnProperty(key)) sSub[key]= 1;
        else sSub[key]+=1;
    }
}

for(let i=0;i<t.length;i++){
    for(let j=i;j<t.length;j++){
        tSub.push(t.substring(i,j+1))
    }
}

let diffC=0;
for(let s in sSub){
    for(let t =0; t<tSub.length; t++){
        if(s.length===tSub[t].length){
          
           let count = 0;
            for(let i=0;i<s.length;i++){
                if(s[i]!==tSub[t][i])count++;
                if(count>1)break;
            }
            if(count===1) diffC+=sSub[s];
           
         }
    }
}
return diffC;
};