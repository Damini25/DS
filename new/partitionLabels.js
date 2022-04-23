/**
 * @param {string} s
 * @return {number[]}
 * T- O(s) , S- O(1)
 */
var partitionLabels = function(s) {
    let map ={};
    
    for(let i=0;i<s.length;i++){ //O(s)
        if(!map.hasOwnProperty(s[i])) map[s[i]]=[i];
        else map[s[i]].push(i);
    }
    
    let i=0; 
    let res=[];
    while(i<s.length){ // O(s)
        let max = map[s[i]][map[s[i]].length-1];
        let count = 1;
        for(let j=i+1;j<=max;j++){ 
            let cMax = map[s[j]][map[s[j]].length-1]
            max = Math.max(max,cMax);
            i++;
            count++;
        }
        res.push(count);
        i++;
    }

    return res;
    
};

// optimised space
/**
 * @param {string} s
 * @return {number[]}
 * T- O(s) , S- O(1)
 */
var partitionLabels = function(s) {
    let map ={};
    
    for(let i=0;i<s.length;i++){ //O(s)
        map[s[i]]=i;
    }
    
    let i = 0; 
    let res=[];
    while(i<s.length){ // O(s)
        let max = map[s[i]];
        let count = 1;
        for(let j=i+1;j<=max;j++){ 
            max = Math.max(max,map[s[j]]);
            i++;
            count++;
        }
        res.push(count);
        i++;
    }

    return res;
    
};