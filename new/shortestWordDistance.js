/**
 * @param {string[]} wordsDict
 * optmised Time but more space O(n)
 */
var WordDistance = function(wordsDict) {
    this.dict = {};
    for(let i=0;i<wordsDict.length;i++ ){
        if(this.dict[wordsDict[i]]){
            this.dict[wordsDict[i]].push(i);
        }else this.dict[wordsDict[i]] = [i];
    }
    return this;
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
   let wArr1 = this.dict[word1];
   let wArr2 = this.dict[word2];
    let i=0; let j=0;let dist= Infinity;
    while(i<wArr1.length && j<wArr2.length && i>=0 && j>=0){
        dist = Math.min(Math.abs(wArr1[i]-wArr2[j]), dist);
        if(dist===1) return 1;
        if(wArr1[i]<wArr2[j]){
            i++;
        }else {
            j++;
        }
    }
    return dist;
};

// **********************************

/**
 * unoptimised, less space
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    this.wordsDict = wordsDict;
    return this;
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
   let w1 =-1, w2=-1;
   let dist= Infinity;
    
    for(let i=0;i<this.wordsDict.length;i++){
        let curr = this.wordsDict[i];
            if(curr === word1) w1 = i;
           if(curr === word2) w2 = i;
          if(w1 !==-1 && w2!==-1){
            dist = Math.min(Math.abs(w2-w1), dist);
          }
        if(dist === 1) return 1;
    }
    return dist;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */