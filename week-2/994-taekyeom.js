/**
 * 994. Rotting Oranges
 *
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const queue = []
  let oranges = 0
  let time = 0
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 2) queue.push([r, c])
      else if (grid[r][c] === 1) oranges++
    }
  }
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  while (queue.length && oranges) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const [r, c] = queue.shift()
      for (const [dr, dc] of dirs) {
        if (r + dr < 0 || r + dr >= grid.length || c + dc < 0 || c + dc >= grid[0].length) continue
        if (grid[r + dr][c + dc] === 1) {
          grid[r + dr][c + dc] = 2
          queue.push([r + dr, c + dc])
          oranges--
        }
      }
    }
    time++
  }
  return oranges === 0 ? time : -1
}
Console
