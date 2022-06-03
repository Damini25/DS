// ********************* Timeout Function  block main thread **************************
function sayHello(){
    console.log("hello")
}

function createTimeout() {
    if(!window.setTimeout){
        window.setTimeout = function(cb, sec){
            const currTime = new Date().getTime();
            let  endTime = 0;
            //console.log('time: ',new Date().getTime(), expectedTime);
            while((endTime - currTime) < sec){
                endTime = new Date().getTime();
            }
            cb();
        }
    }
}
window.setTimeout(sayHello,5000);

// ******************* Timeout Function without blocking main thread ***********************************

function sayHello(){
    console.log("hello")
}

function createTimeout() {
    window.timers = {};
    window.id = window.id ?  window.id++ : 1;

    function check(){
        console.log('in check');
        if(!Object.keys(window.timers).length) return;
        
        for(let i in window.timers){
            const {cb, time} = window.timers[i];
            if(new Date().getTime() > time){
                console.log('in timeout')
                cb();
                delete window.timers[i];
                
            }else requestIdleCallback(check);
        }
    }

    window.setTimeout = function(cb, sec){
        if(typeof cb !== 'function' || typeof sec !== 'number') throw "Wrong args";
        window.timers[window.id] = {cb, time: new Date().getTime() + sec};

        if(Object.keys(window.timers).length === 1) requestIdleCallback(check);
        
        return window.id;
    }

    window.clearTimeout = function(id){
        if(window.timers.hasOwnProperty(id)){
            delete window.timers[id];
        }
    }
    
}


// ******************** Set Interval function ********************

function createSetInterval(){
    if(!window.setInterval){
        window.setInterval = function(cb, ms){

            window.interval = window.interval? window.interval++ : 0;
            
            let ct = new Date().getTime();
            let et = 0;
            while((et-ct)<= ms){
                if(et-ct === ms){
                    cb();
                    ct = new Date().getTime();
                    et = 0;
                }else{
                     et = new Date().getTime();
                }
            }
            return window.interval;
        }

        window.clearInterval = function(inter){
            
        }
    }
};


// *******  
function setIntervalPolyFill(){
    let id = 0;
    let intervalMap = {};

    function setIntervalNew(cb, delay){
        id++;

        function repeat(){
            intervalMap[id] = setTimeout(function(){
                cb();
                if(intervalMap.hasOwnProperty(id)){
                    
                    repeat();
                }
            },delay);
        }
        
        repeat();
        return id;
    }

    function clearIntervalNew(id){
        clearTimeout(id);
        delete intervalMap[id];
    }
    
    return {
        setIntervalNew, clearIntervalNew
    }
}
