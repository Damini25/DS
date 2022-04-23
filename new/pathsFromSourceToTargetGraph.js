/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  return recur(0, [0], [], graph);
};

function recur(curr, arr, result, graph) {
  if (curr === graph.length - 1) {
    result.push(arr);
    return;
  }
  if (graph[curr].length) {
    for (let i = 0; i < graph[curr].length; i++) {
      arr.push(graph[curr][i]);
      recur(graph[curr][i], [...arr], result, graph);
      arr.pop();
    }
  }
  return result;
}
