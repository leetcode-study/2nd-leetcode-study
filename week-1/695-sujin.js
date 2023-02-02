/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const recursive = (i, j) => {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || !grid[i][j]) return 0;
        grid[i][j] = 0;
        return 1 + recursive(i - 1, j) + recursive(i + 1, j) + recursive(i, j -1) + recursive(i, j + 1)
    };

    let answer = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            answer = Math.max(answer, recursive(i, j));
        }
    }
    return answer;
};