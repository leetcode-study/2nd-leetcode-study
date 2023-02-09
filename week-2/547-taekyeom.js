var findCircleNum = function (isConnected) {
  const visited = Array.from({ length: isConnected.length }, () => 0);
  let cnt = 0;
  for (let i = 0; i < isConnected.length; i++) {
    if (visited[i] === 0) {
      dfs(isConnected, visited, i);
      cnt++;
    }
  }
  return cnt;
};

function dfs(isConnected, visited, i) {
  for (let j = 0; j < isConnected.length; j++) {
    if (isConnected[i][j] === 1 && visited[j] === 0) {
      visited[j] = 1;
      dfs(isConnected, visited, j);
    }
  }
}
