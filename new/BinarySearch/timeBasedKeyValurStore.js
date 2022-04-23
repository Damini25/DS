
var TimeMap = function() {
    this.map = {};
    return this;
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    //this.map.push({k:key,v:value, t:timestamp});
    if(!this.map[key]){
        this.map[key]=[{v:value, t:timestamp}];
    }else this.map[key].push({v:value, t:timestamp});
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.map[key]) return "";
    let currMap = this.map[key];
    
    if(timestamp < currMap[0].t) return "";
    
    let l = 0, r = currMap.length-1;
    while(l< r){
        let mid = Math.floor((l+r)/2);
        const {t,v} = currMap[mid];
        if(t === timestamp) return v;
        if(timestamp > t){
            l=mid+1;
        }else{
            r= mid-1;
        } 
    }
    
    let {t,v}= currMap[l];
    return  t <= timestamp? v : currMap[l-1].v;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */