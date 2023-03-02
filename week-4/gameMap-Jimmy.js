function solution(maps) {
  let queue = [];
  let n = maps.length;
  let m = maps[0].length;
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let checkArr = Array(maps.length)
    .fill(0)
    .map(() => new Array(maps[0].length));
  queue.push([0, 0]);
  const sum = 0;
  while (queue.length) {
    length = queue.length;
    for (let i = 0; i < length; i++) {
      dir.forEach((d) => {
        const [first, second] = dir;
        const [sr, sc] = queue[i];
        if (
          sr + first < 0 ||
          sc + second < 0 ||
          sr + first >= n ||
          sc + second >= m ||
          !maps[sr + first][sc + second]
        ) {
          return;
        }
        queue.push(sr + first, sc + second);
        checkArr[sr + first][sc + second] = sum++;
      });
    }
    return checkArr[n][m];
  }
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
