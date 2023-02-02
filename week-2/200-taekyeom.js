var numIslands = function (grid) {
  let num = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === "1") {
        dfs(r, c);
        num++;
      }
    }
  }
  function dfs(r, c) {
    if (
      r < 0 ||
      c < 0 ||
      r >= grid.length ||
      c >= grid[r].length ||
      grid[r][c] !== "1"
    )
      return;
    grid[r][c] = "2";
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }
  return num;
};
