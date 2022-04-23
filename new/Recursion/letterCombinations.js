/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let dict = {
        2:['a','b','c'], 3:['d','e','f'], 4:['g','h','i'], 5:['j','k','l'], 6:['m','n','o'], 7:['p','q','r','s'], 8:['t','u','v'], 9:['w','x','y','z']
    };

    if(!digits) return [];
    
    function find(str, size){
        if(size === 1) {
            return dict[str];
        }
        let res = [];
        
        let ch = str.charAt(0);
        let tillNow = find(str.substring(1), size-1);
        
        for(let i=0; i< dict[ch].length; i++){
            for(let j=0;j<tillNow.length; j++){
                res.push(dict[ch][i] + tillNow[j])
            }
        }
        return res;
    }
    
    return find(digits, digits.length);
};

// ******************* approach -2 **************************
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let dict = {
        2:['a','b','c'], 3:['d','e','f'], 4:['g','h','i'], 5:['j','k','l'], 6:['m','n','o'], 7:['p','q','r','s'], 8:['t','u','v'], 9:['w','x','y','z']
    };

    if(!digits) return [];
    
    function find(str, size, newStr, res){
        if(newStr.length === size) {
            res.push(newStr);
            return;
        }
        
        let ch = str.charAt(0);

        for(let i=0; i< dict[ch].length; i++){
            find(str.substring(1), size, newStr + dict[ch][i], res);
        }
        return res;
    }
    
    return find(digits, digits.length , '', []);
    
};