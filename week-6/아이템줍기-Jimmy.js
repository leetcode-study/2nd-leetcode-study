function solution(rectangle, characterX, characterY, itemX, itemY) {
  let max = 0;
  // 사각형 지역 생성
  for (rec of rectangle) {
    let curMax = Math.max(...rec);
    max = max > curMax ? max : curMax;
  }
  let visited = new Array(max + 1)
    .fill(false)
    .map(() => new Array(max + 1).fill(false));

  // 변들을 true로 변환
  for (rec of rectangle) {
    const [minx, miny, maxx, maxy] = rec;
    for (let i = minx; i < maxx; i++) {
      visited[i][miny] = true;
      visited[i][maxy] = true;
    }
    for (let i = miny; i < maxy; i++) {
      visited[minx][i] = true;
      visited[maxx][i] = true;
    }
  }
  // 사각형 내부를 false로 변경
  for (rec of rectangle) {
    const [minx, miny, maxx, maxy] = rec;
    for (let i = minx; i < maxx; i++) {
      for (let j = miny; j < maxy; j++) {
        if (i > minx && i < maxx && j < maxy && j > miny) {
          visited[i][j] = false;
        }
      }
    }
  }
  console.log(visited);
  let queue = [[characterX, characterY, 0]];
  while (queue.length) {
    let [x, y, distance] = queue.shift();
    if (!visited[x][y]) {
      console.log(queue);
      continue;
    }
    if (x === itemX && y === itemY) {
      console.log(queue);
      return distance;
    }

    if (y < max && visited[x][y + 1]) {
      queue.push([x, y + 1, distance + 1]);
    }
    if (y > 1 && visited[x][y - 1]) {
      queue.push([x, y - 1, distance + 1]);
    }
    if (x < max && visited[x + 1][y]) {
      queue.push([x + 1, y, distance + 1]);
    }
    if (x > max && visited[x - 1][y]) {
      queue.push([x - 1, y, distance + 1]);
      return;
    }
  }
}

console.log(
  solution(
    [
      [1, 1, 7, 4],
      [3, 2, 5, 5],
      [4, 3, 6, 9],
      [2, 6, 8, 8],
    ],
    1,
    3,
    7,
    8
  )
);
