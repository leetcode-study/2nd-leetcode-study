/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = (grid) => {
    if (grid[0][0] !== 0) return -1;
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1],
	];
    
    const queue = [[0, 0, 1]];
    const gridSize = grid.length;

    while(queue.length) {
        const [row, col, path] = queue.shift();
        if (row === gridSize -1 && col === gridSize - 1) return path;
    
		for (const [dx, dy] of directions) {
			let x = row + dx;
			let y = col + dy;
    
            if (x < 0 || x >= gridSize) continue;
            if (y < 0 || y >= gridSize) continue;
            if (grid[x][y] === 1) continue;

            queue.push([x, y, path + 1]);
            grid[x][y] = 1;
        }
    }

    return -1;

}