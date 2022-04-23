/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  let maxProfit = 0;

  function findMaxProfit(start, cProfit) {
    if (start < 0) return cProfit;

    for (let i = start; i < startTime.length; i++) {
      const toStart = findNextGreaterStartIndex(endTime[i], startTime);

      if (toStart === -1) {
        maxProfit = Math.max(maxProfit, cProfit + profit[i]);
        console.log("maxProfit", maxProfit);
        return cProfit + profit[i];
      } else {
        console.log("to start", toStart);

        let nProfit = 0;
        let max = 0;
        for (let j = toStart; j < startTime.length; j++) {
          const toStart = findNextGreaterStartIndex(endTime[j], startTime);
          console.log("toStartint", endTime[j], toStart);
          nProfit = findMaxProfit(toStart, profit[j]);
          max = Math.max(max, nProfit);
          console.log("cmax", max);
        }
        console.log("max", max);
        maxProfit = Math.max(maxProfit, profit[i] + max);
        console.log("maxProfit", startTime[i], maxProfit);
      }
    }
    return maxProfit;
  }

  findMaxProfit(0, 0);
  return maxProfit;
};

function findNextGreaterStartIndex(elem, arr) {
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === elem) return mid;
    if (arr[mid] < elem) {
      start = mid + 1;
    } else end = mid;
  }
  return arr[start] >= elem ? start : -1;
}
