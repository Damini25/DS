
function newAll(promiseArr){
    if(!promiseArr.length) return Promise.resolve([]);
    
    return new Promise((resolve, reject) => {
      let successCount = 0; let result = []
      for(let i = 0; i < promiseArr.length; i++){
        if(promiseArr[i] && typeof promiseArr[i].then === 'function'){
          promiseArr[i].then((successResponse)=>{
            successCount++;
            if(successResponse) result[i] = successResponse;
            if(successCount === promiseArr.length) resolve(result);
          },(errorResponse)=>{
              reject(errorResponse);
          });
        }else{
          successCount++;
          result[i] =  promiseArr[i]; 
        }
      }
    });
  }
  
  // const p1 = new Promise((res,rej)=> 
  //   setTimeout(()=> res(1), 1000)
  // );
  const p1= Promise.resolve(3);
  const p2= 42;
  // const p2 = new Promise((res, rej)=> res(2));
  const p3 = new Promise((res,rej)=> setTimeout(()=> rej('foo'), 100));
  
  const promiseArray = [p1,p2,p3];
  
  newAll([]).then(response => {
    //if(response)
     console.log('final response', response)
  }, 
  rejectionResponse => console.log('final rejection', rejectionResponse)
  );
  