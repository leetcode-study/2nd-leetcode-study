function solution(n, computers) {
    var answer = 0;
    // 각 컴퓨터를 확인했는지 체크
    const check = [];
    for (const computer of computers) {
        check.push(false)
    }

    function dfs(index) {
        check[index] = true;
        
        for (let i = 0; i < computers.length; i++) {
            if (computers[index][i] === 1 && !check[i]) {

                dfs(i)
            }
        }
    }

    for (let i = 0; i < computers.length; i++) {
        if (!check[i]) {
            dfs(i);
            answer += 1;
        }
    }

    return answer;
}