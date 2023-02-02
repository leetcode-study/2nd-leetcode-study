var updateMatrix = function (mat) {
  let n = mat.length;
  let m = mat[0].length;
  let queue = [];
  let newMat = Array(n)
    .fill(0)
    .map(() => new Array(m).fill(Infinity));
  function queueZeros(matrix) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (matrix[i][j] === 0) {
          queue.push([i, j]);
          newMat[i][j] = 0;
        }
      }
    }
  }
  queueZeros(mat);
  let dist = 1;
  while (queue.length) {
    const qLength = queue.length;
    const direc = [
      [0, -1],
      [0, 1],
      [1, 0],
      [-1, 0],
    ];
    for (let i = 0; i < qLength; i++) {
      const [sr, sc] = queue.shift();
      direc.forEach((dir) => {
        const [moveOne, moveTwo] = dir;
        if (
          !(
            sr + moveOne < 0 ||
            sc + moveTwo < 0 ||
            sr + moveOne >= n ||
            sc + moveTwo >= m
          )
        ) {
          if (newMat[sr + moveOne][sc + moveTwo] === Infinity) {
            queue.push([sr + moveOne, sc + moveTwo]);
            newMat[sr + moveOne][sc + moveTwo] = dist;
          }
        }
      });
    }
    dist++;
  }
  return newMat;
};

console.log(
  updateMatrix([
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);
