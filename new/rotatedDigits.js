/**
 * Input: n = 10
Output: 4
Explanation: There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    let dict = {0:0, 1:1, 2:5 ,5:2, 6:9, 8:8, 9:6};
        let count =0;
        
        for(let i=0;i<=n;i++){
            if(isValidNumber(i)) count++;
        }
        
        function isValidNumber(num){
          
            num = String(num);
            let rotatedNumber = '';
            for(let i=0;i<num.length;i++){
                if(!dict.hasOwnProperty(num[i]))return false;
                //console.log('dict[num[i]]',dict[num[i]])
                rotatedNumber = rotatedNumber + dict[num[i]];
            }
            //console.log('rotatedNumber',rotatedNumber, num, rotatedNumber!== num);
            return rotatedNumber!== num;
        };
        
        return count;
    };