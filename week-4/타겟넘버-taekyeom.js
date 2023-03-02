/**
 * 타겟 넘버 (Level 2) > 깊이/너비 우선 탐색(DFS/BFS)
 */
function solution(numbers, target) {
  let answer = 0
  function dfs(sum, idx) {
    if (idx === numbers.length) {
      if (sum === target) answer++
      return
    }
    dfs(sum + numbers[idx], idx + 1)
    dfs(sum - numbers[idx], idx + 1)
  }
  dfs(0, 0)
  return answer
}
