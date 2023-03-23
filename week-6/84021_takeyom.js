function solution(game_board, table) {
  const SIZE = table.length;
  const puzzlePieces = [];
  const blankPieces = [];
  const q = [];
  const moves = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const getOneDemensionArray = (size) => [...Array(size)].map(() => 0);

  const getTwoDimensionArray = (size) =>
    [...Array(size)].map(() => getOneDemensionArray(size));

  const getMinMaxCoordinates = (coordinates) =>
    coordinates.reduce(
      (m, [y, x]) => {
        m[0] = Math.min(m[0], y);
        m[1] = Math.min(m[1], x);
        m[2] = Math.max(m[2], y);
        m[3] = Math.max(m[3], x);

        return m;
      },
      [SIZE, SIZE, 0, 0]
    );

  const rotatePiece = (piece) => {
    const size = piece.length;
    const pieceCoordinates = [];

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (piece[size - j - 1][i]) {
          pieceCoordinates.push([i, j]);
        }
      }
    }

    const newPiece = getTwoDimensionArray(size);
    const [minY, minX] = getMinMaxCoordinates(pieceCoordinates);

    pieceCoordinates.forEach(([y, x]) => (newPiece[y - minY][x - minX] = 1));

    return newPiece;
  };

  const getPiece = (y, x, board, targetNumber) => {
    const pieceCoordinates = [[y, x]];

    q.push([y, x]);
    board[y][x] = -1;

    while (q.length) {
      const [curY, curX] = q.shift();

      for (const [my, mx] of moves) {
        const ny = curY + my;
        const nx = curX + mx;

        if (ny < 0 || ny >= SIZE || nx < 0 || nx >= SIZE) continue;

        if (board[ny][nx] != targetNumber) continue;

        pieceCoordinates.push([ny, nx]);
        q.push([ny, nx]);
        board[ny][nx] = -1;
      }
    }

    const [minY, minX, maxY, maxX] = getMinMaxCoordinates(pieceCoordinates);
    const size = Math.max(maxY - minY, maxX - minX) + 1;
    const piece = getTwoDimensionArray(size);

    pieceCoordinates.forEach(([y, x]) => (piece[y - minY][x - minX] = 1));

    return piece;
  };

  const getCellCount = (piece) =>
    piece.reduce(
      (m, row) => row.reduce((m, col) => (m += col == 1 ? 1 : 0), m),
      0
    );

  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (table[i][j] == 1) {
        puzzlePieces.push(getPiece(i, j, table, 1));
      }

      if (game_board[i][j] == 0) {
        blankPieces.push(getPiece(i, j, game_board, 0));
      }
    }
  }

  const isCoveredBlank = getOneDemensionArray(blankPieces.length);
  let ans = 0;

  for (let i = 0; i < puzzlePieces.length; i++) {
    const puzzlePiece = puzzlePieces[i];
    const puzzleCellCount = getCellCount(puzzlePiece);

    for (let j = 0; j < blankPieces.length; j++) {
      if (isCoveredBlank[j]) continue;

      let blankPiece = blankPieces[j];
      const size = blankPiece.length;

      if (puzzlePiece.length != size) continue;

      const blankCellCount = getCellCount(blankPiece);

      if (puzzleCellCount != blankCellCount) continue;

      let flag = false;

      for (let ro = 0; ro < 4; ro++) {
        let isCorrect = true;

        check: for (let i = 0; i < size; i++) {
          for (let j = 0; j < size; j++) {
            if (puzzlePiece[i][j] != blankPiece[i][j]) {
              isCorrect = false;
              break check;
            }
          }
        }

        if (isCorrect) {
          flag = true;
          break;
        }

        if (ro == 3) break;

        blankPiece = rotatePiece(blankPiece);
      }

      if (!flag) continue;

      isCoveredBlank[j] = 1;
      ans += puzzleCellCount;

      break;
    }
  }

  return ans;
}
