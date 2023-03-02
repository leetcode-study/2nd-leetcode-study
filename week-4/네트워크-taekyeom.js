/**
 * 네트워크 (Level 3) > 깊이/너비 우선 탐색(DFS/BFS)
 */
function solution(n, computers) {
  let answer = 0
  const visited = Array.from({ length: n }, () => false)
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i)
      answer++
    }
  }
  function dfs(i) {
    if (visited[i]) return
    visited[i] = true
    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1) {
        dfs(j)
      }
    }
  }
  return answer
}
