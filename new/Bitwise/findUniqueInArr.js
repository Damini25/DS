function findUnique(arr) {
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    res ^= arr[i];
  }
  return res;
}


function findIBit(i, n){
/**
 * eg- 10110110-- start from last- eg -  i= 5
 *     00010000-- to find 10000-> 1<<4 = 10000
 */
  return n & (1 << (n-1));
}

function setIBit(i, n){
  /**
   * eg- 1010110-- start from last- eg -  i= 4
   *     0001000-- to find 1000-> 1<<3 = 1000
   */
    return n | (1 << (n-1));
  }

  function resetIBit(i, n){
    /**
     * eg- 1010110-- start from last- eg -  i= 4
     *     0001000-- to find 1000-> 1<<3 = 0111
     */
      return n & ~(1 << (n-1));
  }