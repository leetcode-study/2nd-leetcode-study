function regionsBySlashes(grid) {
  let mapped = new Array(grid.length * 3)
    .fill()
    .map((row) => new Array(grid[0].length * 3).fill(0));
  console.log(mapped);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "/") {
        mapped[i * 3][j * 3 + 2] = 1;
        mapped[i * 3 + 1][j * 3 + 1] = 1;
        mapped[i * 3 + 2][j * 3] = 1;
      }
      if (grid[i][j] === "\\") {
        mapped[i * 3][j * 3] = 1;
        mapped[i * 3 + 1][j * 3 + 1] = 1;
        mapped[i * 3 + 2][j * 3 + 2] = 1;
      }
    }
  }
  console.log(mapped);
  let count = 0;
  for (let i = 0; i < mapped.length; i++) {
    for (let j = 0; j < mapped[0].length; j++) {
      if (!mapped[i][j]) {
        count++;
        expand(i, j, mapped);
      }
    }
  }
  return count;
}

function expand(i, j, mapped) {
  let q = [[i, j]];
  mapped[i][j] = 1;
  while (q.length) {
    let [x, y] = q.shift();
    [
      [x + 1, y],
      [x, y + 1],
      [x - 1, y],
      [x, y - 1],
    ].forEach(([newX, newY]) => {
      if (
        newX >= 0 &&
        newY >= 0 &&
        newX < mapped.length &&
        newY < mapped[0].length &&
        !mapped[newX][newY]
      ) {
        mapped[newX][newY] = 1;
        q.push([newX, newY]);
      }
    });
  }
}

console.log(regionsBySlashes([" /", "/ "]));
