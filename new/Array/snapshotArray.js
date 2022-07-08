/**
 * Link- https://leetcode.com/problems/snapshot-array/
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.array = new Array(length)
    for(let i=0;i<this.array.length;i++){
        this.array[i]= { 0:0}
    }
    this.snapId = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.array[index][this.snapId] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    return this.snapId++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    let keys = Object.keys(this.array[index]);
    for(let i = keys.length-1;i>=0;i--){
        if(keys[i]<=snap_id){
            return this.array[index][keys[i]];
        }
    }
    return this.array[index][0];
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

 // ********** little optimised ***
 /**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.array = [];
    this.snapshots=[];
    this.snapId = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.array[index] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snapshots.push([...this.array]);
    return this.snapId++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    if(this.snapshots[snap_id][index] === undefined) return 0
    
    return this.snapshots[snap_id][index];
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */