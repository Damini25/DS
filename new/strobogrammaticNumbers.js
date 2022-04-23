// ********* optimized *****
/**
 * 
 * @param {*} n 
 * Input: n = 2
Output: ["11","69","88","96"]
 */
var findStrobogrammatic = function(n) {
    let result = [];
     
     function recur(n, m){
        if(n===0) return [''];
        if(n===1) return ['0','1','8'];
     
        let list = recur(n-2,m) ;
        result=[];
        for(let i =0;i<list.length;i++){
            c = list[i];
            if(n!==m) result.push('0'+ c + '0');
            result.push('1'+ c + '1');
            result.push('6'+ c + '9');
            result.push('8'+ c + '8');
            result.push('9'+ c + '6');
        }
         return result;
     }
    
     return recur(n,n);
 };

//********* un optimised */
/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
    let dict = {0:0, 1:1, 6:9, 8:8, 9:6};
    let result = [];
     
     recur('');
     
     function recur(num){
         console.log(num)
         if(num.length === n){
             //console.log('n',num)
             if(isStrobogrammatic(num, n)) result.push(num);
             return;
         }
         for(let i in dict){
             let curr = num+''+i;
             recur(curr);
         }
         return result;
     }
     //console.log(result);
     return result
 };
 
 
 const isStrobogrammatic = (n, len)=>{
     n = String(Number(n));
     if(n.length !==len) return false;
     let dict = {0:'0',1:'1',6:'9',8:'8', 9:'6'};
     let i=0, j=n.length-1;
     
     while(i<=j){
         if(!dict.hasOwnProperty(n[i]) || !dict.hasOwnProperty(n[j])) return false;
         if(dict[n[i]] !== n[j] ) return false;
         i++; j--;
     }
     return true;
 }