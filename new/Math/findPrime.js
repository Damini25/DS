/**
 * 
 * @param {} n 
 * 
 * Space- O(N)
 * Time- O( N (log(log(n))) );
 */
function findPrime(n){
    //eg: n = 40
      let arr = new Array(n+1).fill(false);
  
      for (let i = 2; i*i <= n; i++) {  //O(log n)
          if(!arr[i]){
              for (let j = i*2; j <= n; j+=i){ // O(log(log N))
                  arr[j]= true;
              }
          }
      }
      let res=[];
      for (let i = 2; i <= n; i++) {  //O(n)
            if(!arr[i]){
                res.push(i);
            }
      }
      return res;
  }