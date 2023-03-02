function solution(maps) {
  const queue = [];
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  queue.push([0, 0, 0]);
  maps[0][0] = 2;
  while (queue.length) {
    const [r, c, cnt] = queue.shift();
    if (r === maps.length - 1 && c === maps[0].length - 1) return cnt + 1;
    for (const [dR, dC] of dirs) {
      const nR = r + dR;
      const nC = c + dC;
      if (
        nR < 0 ||
        nC < 0 ||
        nR >= maps.length ||
        nC >= maps[0].length ||
        maps[nR][nC] !== 1
      )
        continue;
      maps[nR][nC] = 2;
      queue.push([nR, nC, cnt + 1]);
    }
  }
  return -1;
}
