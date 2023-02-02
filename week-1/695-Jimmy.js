var maxAreaOfIsland = function (grid) {
  let checkArr = Array(grid.length)
    .fill(0)
    .map(() => new Array(grid[0].length));
  eachArea = 0;
  function dfs(sr, sc) {
    if (
      sr < 0 ||
      sc < 0 ||
      sr >= grid.length ||
      sc >= grid[sr].length ||
      checkArr[sr][sc] ||
      !grid[sr][sc]
    ) {
      return;
    }
    eachArea += 1;
    checkArr[sr][sc] = 1;

    dfs(sr + 1, sc);
    dfs(sr - 1, sc);
    dfs(sr, sc - 1);
    dfs(sr, sc + 1);
    return eachArea;
  }
  let maxArea = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!checkArr[i][j] && grid[i][j]) {
        maxArea = Math.max(maxArea, dfs(i, j));
        eachArea = 0;
      }
    }
  }
  return maxArea;
};

console.log(
  maxAreaOfIsland(
    (grid = [
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ])
  )
);

// v2

var maxAreaOfIsland = function (grid) {
  let ans = 0,
    n = grid.length,
    m = grid[0].length;
  const trav = (i, j) => {
    if (i < 0 || j < 0 || i >= n || j >= m || !grid[i][j]) return 0;
    grid[i][j] = 0;
    // recursion 제대로 활용하는 법
    return (
      1 + trav(i - 1, j) + trav(i, j - 1) + trav(i + 1, j) + trav(i, j + 1)
    );
  };
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) if (grid[i][j]) ans = Math.max(ans, trav(i, j));
  return ans;
};
