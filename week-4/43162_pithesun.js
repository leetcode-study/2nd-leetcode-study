
function solution(n, computers) {
    const computerCount = computers.length
    let answer = 0;
    for(let i = 0 ; i < computerCount; i++){
       answer +=  dfs(i)
    }
    
    // return 1 or 0 
    function dfs(root){
        if(visited[root]) return 0
        
        visited[root] = 1

        for(let i = 0; i < computerCount; i++){
            if(computers[root][i] === 1 && !visited[i]) {
                dfs(i)
            } 
        }
        return 1;
    }
    
    return answer;
}
