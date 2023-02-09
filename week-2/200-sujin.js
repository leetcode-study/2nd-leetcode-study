/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const recursive = (x, y) => {
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[x].length || grid[x][y] === "0") return;
        grid[x][y] = "0";
        recursive(x -1, y);
        recursive(x + 1, y);
        recursive(x, y - 1);
        recursive(x, y + 1);

    }

    let answer = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                answer += 1;
                recursive(i, j);
            }

        }
    }

    return answer;
};