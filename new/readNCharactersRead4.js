/**
 * Definition for read4()
 * 
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        let intBuf = []; let cLength = 0;
        for(let i=0; i < n; i++){
            if(i === 0 || i % 4 === 0){
                 cLength = cLength + read4(intBuf);
                 
            }
            buf.push(intBuf.shift());
            if(buf.length === n) return;
        }
    };
};