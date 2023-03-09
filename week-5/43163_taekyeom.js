function solution(begin, target, words) {
  let answer = 0;
  const visited = new Set();
  const queue = [];
  queue.push([begin, answer]);
  while (queue.length) {
    const [val, cnt] = queue.shift();
    if (val === target) return cnt;
    for (const word of words) {
      if (visited.has(word)) continue;
      let diff = 0;
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== val[i]) diff++;
      }
      if (diff === 1) {
        queue.push([word, cnt + 1]);
        visited.add(word);
      }
    }
  }
  return answer;
}
