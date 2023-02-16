/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] !== 0 || grid[grid.length - 1][grid.length - 1] !== 0)
    return -1;
  const queue = [];
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];
  queue.push([0, 0, 1]);
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [r, c, d] = queue.shift();
      if (r === grid.length - 1 && c === grid.length - 1) return d;
      for (const [dR, dC] of dirs) {
        const nR = r + dR;
        const nC = c + dC;
        if (
          nR < 0 ||
          nC < 0 ||
          nR >= grid.length ||
          nC >= grid[nR].length ||
          grid[nR][nC] !== 0
        )
          continue;
        grid[nR][nC] = 2;
        queue.push([nR, nC, d + 1]);
      }
    }
  }
  return -1;
};
