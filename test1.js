/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let maxLeng = arr[0].length;
  let word = arr[0];
  let seqArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        word = word + arr[j];
        seqArr.push(arr[i],arr[j],arr[i]+arr[j], word);
    }
  }

  function doesDuplicateExists(str) {
    const map = {};
    for (let i = 0; i < str.length; i++) {
      if (!map.hasOwnProperty(str[i])) map[str[i]] = 1;
      else return true;
    }
    return false;
  }

  return maxLeng;
};
