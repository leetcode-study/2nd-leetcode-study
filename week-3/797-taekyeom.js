/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const paths = [];
  function dfs(vertex, path) {
    path.push(vertex);
    if (vertex === graph.length - 1) {
      paths.push(path);
      return;
    }
    for (let i = 0; i < graph[vertex].length; i++) {
      dfs(graph[vertex][i], [...path]);
    }
  }
  dfs(0, []);
  return paths;
};
