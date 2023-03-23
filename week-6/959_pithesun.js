// 다시 풀어야함 -> union find - connected graph로 풀면 된다고 생각ㅜㅅㅜ
/**
 * @param {string[]} grid
 * @return {number}
 */
let dx = [-1, 1, 0, 0]
let dy = [0, 0, -1, 1]

var regionsBySlashes = function(grid) {

    let largeGrid = (new Array(31).fill(0)).map(() => new Array(31).fill(0))
    let visited = (new Array(31).fill(0)).map(() => new Array(31).fill(0))

    let n = grid.length;
    let n2 = n * 2;

    for(let i= 0 ; i < n; i++){
        for(let j=0; j < n; j++){
            if(grid[i][j] == '/'){
                largeGrid[i*2][j*2 + 1] = 1;
                largeGrid[i*2+1][j*2] = 1
            }else if(grid[i][j] == '\\'){
                largeGrid[i*2][j*2] = 1
                largeGrid[i*2+1][j*2 + 1] = 1
            }
        }
    }

    for(let i=0; i < n2 ; i++){
        console.log(largeGrid[i].slice(0, n2))
    }

    let graphcnt = 0;
    for(let i=0; i < n2 ; i++){
        for(let j=0; j < n2; j++){
            let cnt = dfs(i, j);
            if(cnt> 0) {
                graphcnt++;
                //console.log('dfsssss')
            }
        }
    }

   // console.log("graphcnt " + graphcnt)

    // for(let i=0; i < n2 ; i++){
    //     console.log(visited[i].slice(0, n2))
    // }

    //connected grapth 찾기
    function dfs(cy, cx){
        if(visited[cy][cx]) return 0; 
        if(largeGrid[cy][cx] == 1) return 0;

        visited[cy][cx] = 1
        //console.log(cy + " : " + cx)

        for(let i = 0 ; i < 4; i++){
            let ny = cy + dy[i];
            let nx = cx + dx[i];
            if(ny < 0 || ny > n2 -1 || nx < 0 || nx > n2 -1) continue;

            
            dfs(ny, nx)
        }
        return 1;
    }

    return graphcnt

};
