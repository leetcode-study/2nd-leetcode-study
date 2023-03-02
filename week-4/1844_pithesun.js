
// 최소거리
function solution(maps) {
    var answer = 0;
    let visited = (new Array(101)).fill(0).map((el) => new Array(101).fill(0))

    let dx = [-1, 1, 0, 0]
    let dy = [0, 0, -1, 1]
    
    let descY = maps.length - 1
    let descX = maps[0].length - 1
    
    let que = [[0,0]]
    visited[0][0] = 1; // 최소 거리이자 방문여부
    
    while(que.length > 0){
     const cur = que.splice(0, 1);
     const curY = cur[0][0];
     const curX = cur[0][1];
        
      if(curY === descY && curX == descX ){
          //console.log("break")
          break;
      }
        
      for(let i =0; i < 4; i++){
          let nextY = curY + dy[i];
          let nextX = curX + dx[i];
          
          if(nextY < 0 || nextY > descY  || nextX < 0 || nextX > descX ) continue;
          if(visited[nextY][nextX] > 0) continue;
          if(maps[nextY][nextX] === 0) continue;
          
          que.push([nextY, nextX])
          visited[nextY][nextX] = visited[curY][curX] + 1;
      }
    }
    
    if(visited[descY][descX] == 0) return -1
    return visited[descY][descX];
}
