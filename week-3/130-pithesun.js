/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var visited;
let dx = [-1, 1, 0, 0]
let dy = [0, 0, -1, 1]

function dfsO(h, w, board){
    if(visited[h][w]) return
    if(board[h][w] == "X") return
    
    visited[h][w] = 1
    
    for(let i=0; i < 4; i++){
        let newY = h + dy[i]
        let newX = w + dx[i]
        
        if(newY < 0 || newY > h-1 || newX < 0 || newX > w-1 || visited[newY][newX] == 1) continue;
        
        dfsO(newY, newX, board)
    }
}

function dfs(h, w, board){
    if(visited[h][w]) return
    
    visited[h][w] = 1
    if(board[h][w] == "O"){
        board[h][w] = "X"
    }
    
    for(let i=0; i < 4; i++){
        let newY = h + dy[i]
        let newX = w + dx[i]
        
        if(newY < 0 || newY > h-1 || newX < 0 || newX > w-1 || visited[newY][newX] == 1) continue;
        dfs(newY, newX, board)
    }
}

var solve = function(board) {
    let h = board.length
    let w = board[0].length
    
    visited = (new Array(204))
    .fill(null)
    .map(() => (new Array(204)).fill(0));

    // 가장자리를 모두 방문탐색했다고 가정함
    for(let i=0; i < w; i++){
        if(board[0][i] == 'O'){
            dfsO(0, i, board)
        }
        if(board[h-1][i] == 'O'){
            dfsO(h-1, i, board)
        }
    }
    for(let i=0; i < h; i++){
        if(board[i][0] == 'O'){
            dfsO(i, 0, board)
        }
        if(board[i][w-1] == 'O'){
            dfsO(i, w-1, board)
        }
    }
    
    
    // 나머지 x를 통해 방문 -> o를 x로 바꿔줌
    for(let y=0; y < h; y++ ){
        for(let x=0; x<w; x++){
            dfs(y, x, board)
        }
    }
    
};
