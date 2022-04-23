
/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function(sentence, rows, cols) {
    let fitCount = 0;
    let r = 0; let i = 0;
    let wLen=0;
    while(r<rows){
        if(sentence[i].length> cols) return 0;
         wLen = wLen + sentence[i].length + 1 ;
        if(wLen <= cols+1){
            i++;
        }else{
            r++;wLen=0;
        }
        if(i>=sentence.length) {
           fitCount++; i=0; 
        }
    }
    return fitCount;
};
/** Un Optimised
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 * O(r*c*s) - Time
 */
var wordsTyping = function(sentence, rows, cols) {
    let fitCount = 0;
    let r = 0; let i = 0;
    while(r<rows){
        let c =0;   
        while(c<=cols){
            let wLen = sentence[i].length;
            if( wLen  > cols) return 0; // edge cond
            
            if((wLen + c)<=cols){
                c= c+wLen+1;
                i++;
                if(i >= sentence.length) {
                    fitCount++;
                    i = 0;
                }
            }else{
                break;
            }
        }
        r++;
    }
    return fitCount;
};