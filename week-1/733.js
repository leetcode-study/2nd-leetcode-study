/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const h = image.length;
  const w = image[0].length;
  const cur = image[sr][sc];
  if (color === cur) return image;
  function dfs(r, c) {
    if (r < 0 || r >= h || c < 0 || c >= w || image[r][c] !== cur) return;
    image[r][c] = color;
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }
  dfs(sr, sc);
  return image;
};
