// eg= "abc"
function findPermutations(s){

    function find(newStr, origStr, res){

        if (origStr === '' ) {
          res.push(newStr);
          return res;
        }

        let ch =  origStr.charAt(0);
        let size = newStr.length;
        
        for(let i= 0 ; i <= size; i++){
          let c = newStr.substring(0,i) + ch + newStr.substring(i);
          find(c, origStr.substring(1), res);
        }
        
        return res;
    }

    return find('', s, [])
}

console.log(findPermutations('abc'))