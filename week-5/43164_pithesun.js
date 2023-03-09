function solution(tickets) {
  let graph = {};
  // MAP을 사용했으면 조금 더편리했음
  tickets.forEach((v) => {
    let [depart, arrival] = v;
    // console.log(depart, arrival);

    //초기화
    if (!graph[depart]) {
      graph[depart] = [];
    }

    if (!graph[arrival]) {
      graph[arrival] = [];
    }

    //그래프 만들기
    if (graph[depart] != undefined) {
      graph[depart].push(arrival);
    }
  });

  let ticketsNum = tickets.length;

  let order = [];
  dfs("ICN");

  function dfs(depart) {
    if (!depart) return false;

    if (ticketsNum <= 0) {
      //console.log("depart", depart);
      order.push(depart);
      return true;
    }

    //다음 방문할 국가들
    let nexts = graph[depart].sort();
    let next;
    let result;

    for (let i = 0; i < nexts.length; i++) {
      //방문
      order.push(depart);
      ticketsNum--;
      next = nexts.shift();

      if (next != undefined) {
        result = dfs(next);
      }

      //잘못된 경로일 경우 복구
      if (!result && ticketsNum >= 0) {
        nexts.push(next);
        order.pop();
        ticketsNum++;
      }
    }

    return result;
  }

  return order;
}
