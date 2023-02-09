var orangesRotting = function (grid) {
  const queue = [];
  let fresh = 0;
  let minute = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 2) queue.push([r, c]);
      else if (grid[r][c] === 1) fresh++;
    }
  }
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  while (queue.length && fresh) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [r, c] = queue.shift();
      for (const [dR, dC] of dirs) {
        const nR = r + dR;
        const nC = c + dC;
        if (
          nR < 0 ||
          nC < 0 ||
          nR >= grid.length ||
          nC >= grid[nR].length ||
          grid[nR][nC] !== 1
        )
          continue;
        grid[nR][nC] = 2;
        queue.push([nR, nC]);
        fresh--;
      }
    }
    minute++;
  }
  return fresh === 0 ? minute : -1;
};
