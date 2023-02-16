/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (
        board[r][c] === "O" &&
        (r === 0 ||
          r === board.length - 1 ||
          c === 0 ||
          c === board[0].length - 1)
      ) {
        dfs(r, c);
      }
    }
  }
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === "C") {
        board[r][c] = "O";
      } else {
        board[r][c] = "X";
      }
    }
  }
  function dfs(r, c) {
    if (
      r < 0 ||
      c < 0 ||
      r >= board.length ||
      c >= board[r].length ||
      board[r][c] === "X" ||
      board[r][c] === "C"
    )
      return;
    board[r][c] = "C";
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }
  return board;
};
