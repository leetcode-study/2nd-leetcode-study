var findCircleNum = function (isConnected) {
  let answer = 0;
  let n = isConnected.length;
  let m = isConnected[0].length;
  function dfs(sr, grid, j) {
    grid[sr].forEach((num, i) => {
      if (num === 1) {
        grid[sr][i] = 0;
        dfs(i, grid, j);
      }
    });
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (isConnected[i][j] === 0) {
        continue;
      } else {
        answer++;
        dfs(i, isConnected, j);
      }
    }
  }
  return answer;
};
console.log(
  findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
