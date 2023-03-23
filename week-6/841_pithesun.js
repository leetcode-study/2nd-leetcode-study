/**
 * @param {number[][]} rooms
 * @return {boolean}
 */



var canVisitAllRooms = function(rooms) {
    
    let visited = new Array(1001).fill(0);
    let count = 0;
    
    function dfs(root){
        if(visited[root]) return ;
        visited[root] = 1
        //console.log(root)
        let nexts = rooms[root]

        for(let i = 0; i < nexts.length ; i++){
            dfs(nexts[i])
        }
    }
    
    dfs(0) //dfs

    for(let i=0; i < rooms.length ; i++){
        if(!visited[i]) return false
    }
    return true
};
