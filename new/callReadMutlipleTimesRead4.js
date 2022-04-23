/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
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
    let intBuf = [];
    return function(buf, n) {
        for(let i=1; i<= n; i++){
            if( !intBuf.length){
               read4(intBuf);
            }
            if(intBuf.length){
                buf.push(intBuf.shift());
            }
            if(buf.length===n)return;
        }
    };
};