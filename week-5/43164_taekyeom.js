function solution(tickets) {
  const result = [];
  const visited = Array.from({ length: tickets.length }, () => false);

  tickets.sort();

  const backtrack = (start, path) => {
    if (path.length === tickets.length + 1) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      const [from, to] = tickets[i];

      if (visited[i] || from !== start) continue;

      path.push(to);
      visited[i] = true;
      backtrack(to, path);
      visited[i] = false;
      path.pop();
    }
  };

  backtrack("ICN", ["ICN"]);

  return result[0];
}

function solution(tickets) {
  const result = [];
  const graph = {};
  const visited = {};

  const set = new Set(tickets.flat());
  for (const node of set) {
    graph[node] = [];
  }

  for (const [from, to] of tickets) {
    graph[from].push(to);
  }

  for (const from in graph) {
    graph[from].sort();
  }

  const backtrack = (start, path) => {
    if (path.length === tickets.length + 1) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < graph[start].length; i++) {
      const next = graph[start][i];
      const key = `${start}${i}`;

      if (visited[key]) continue;

      path.push(next);
      visited[key] = true;
      backtrack(next, path);
      visited[key] = false;
      path.pop();
    }
  };

  backtrack("ICN", ["ICN"]);

  return result[0];
}
