const sumAsync = function(a, b, cb){
    if(!a||!b) return cb("Not enough arguments", null);
    return cb(null, a+b);
};

const sumPromise = promisify(sumAsync);

sumPromise(1,2).then(res=> {
    console.log('result',res)
}, (error) => {
    console.log('error',error)
});

const promisify = function(fn){
    return (...args) => {
        return new Promise((res, rej)=>{
            function callback(err, result){
                if(err){
                    rej(err);
                }else{
                    res(result);
                }
            }
            args.push(callback);
            fn.call(this, ...args);
        });
    }
};