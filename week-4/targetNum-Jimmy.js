function targetNum(target, numbers) {
  let answer = 0;
  function dfs(i, sum) {
    if (i === numbers.length) {
      if (sum === target) {
        answer++;
      }
    } else {
      dfs(i + 1, sum + numbers[i]);
      dfs(i + 1, sum - numbers[i]);
    }
    return sum;
  }
  dfs(0, 0);
  return answer;
}
console.log(targetNum(3, [1, 1, 1, 1, 1]));
