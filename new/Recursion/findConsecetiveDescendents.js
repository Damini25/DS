//Link- https://www.geeksforgeeks.org/consecutive-sequenced-numbers-in-a-string/
// Link- https://workat.tech/problem-solving/practice/consecutively-descending-integers
const str =  '10099989796'

function checkDescendent(str){
	const len = Math.ceil(str.length/2);
	for(i=1;i<=len;i++){
			if(recur(0, str.substring(0,i))) return true;
		}
	return false;

	function recur(start, s){
   
		if((start+s.length)>=str.length) return true;
		const end =  start + s.length;
        const toFind = (s - 1);
		const temp  = str.substring(end, end+String(toFind).length);
		if(Number(temp) === (s -1)){
			return recur(end, temp);
        }else {
            return false;
         }
    }
}

console.log('checkDescendent',checkDescendent(str))

// ********* optimised T- O(n^2) S- O(n)
const str =  '10099989796'

function checkDescendent(str){
	const len = Math.ceil(str.length/2);
	for(i=1;i<=len;i++){ // O(n)
			if(recur(0, str.substring(0,i))) return true;
		}
	return false;

	function recur(start, s){ //O(n)
       let i = start +1;
        let newStr= s;
        let curr = Number(s);
      
      while(i < str.length){
        const _temp = curr-1;
        
        if(_temp< 0) return false;
        curr = _temp;
        newStr+=_temp;
        
        i= newStr.length;
      }
      
      if(newStr === str) return true;
      
      return false;
    }
}

console.log('checkDescendent',checkDescendent(str))
