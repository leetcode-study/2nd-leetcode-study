var orangesRotting = function (grid) {
  let n = grid.length;
  let m = grid[0].length;
  let queue = [];
  let answer = 0;
  function setQueue(grid) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === 2) {
          queue.push([i, j]);
        }
      }
    }
  }
  function bfs(grid) {
    setQueue(grid);
    let direct = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    while (queue.length) {
      let m = queue.length;
      let isPush = false;
      for (let t = 0; t < m; t++) {
        let [sr, sc] = queue.shift();
        direct.forEach((dir) => {
          const [first, second] = dir;
          if (
            !(
              sr + first < 0 ||
              sc + second < 0 ||
              sr + first >= n ||
              sc + second >= grid[0].length
            )
          ) {
            if (grid[sr + first][sc + second] === 1) {
              grid[sr + first][sc + second] = 2;
              queue.push([sr + first, sc + second]);
              isPush = true;
            }
          }
        });
      }
      if (isPush) {
        answer++;
        isPush = false;
      }
    }
  }
  bfs(grid);
  let isCorrect = true;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        isCorrect = false;
        break;
      }
    }
  }
  return isCorrect ? answer : -1;
};
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
);
