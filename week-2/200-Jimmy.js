var numIslands = function (grid) {
  let answer = 0;
  let n = grid.length;
  let m = grid[0].length;
  let currIsland = 0;
  function dfs(sr, sc, grd) {
    if (sr < 0 || sc < 0 || sr >= n || sc >= m || !Number(grd[sr][sc])) {
      return;
    }
    grd[sr][sc] = 0;
    currIsland++;
    dfs(sr + 1, sc, grd);
    dfs(sr - 1, sc, grd);
    dfs(sr, sc + 1, grd);
    dfs(sr, sc - 1, grd);
    return currIsland;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let islandNum = dfs(i, j, grid);
      currIsland = 0;
      islandNum ? answer++ : "";
    }
  }
  return answer;
};

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
