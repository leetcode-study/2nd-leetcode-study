[]/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const queue = [];
    // 0 이 아닌 값을 경로의 길이로 업데이트 한다.
    // 그런데, 업데이트시, 이게 최초값인건지 아님 경로의 길이로 업데이트된 값인지 구분하지 못한다.
    // 따라서, 0이 아닌 값들을 Infinity로 만들어주고 시작한다.
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j, 0]);
            } else {
                mat[i][j] = Infinity;
            }
        }
    }

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    while (queue.length) {
        const [i, j, depth] = queue.shift();
        // 비교해서 작은 값 넣어줌
        if (mat[i][j] > depth) {
            mat[i][j] = depth;
        }
        directions.forEach(direction => {
            const next = [i + direction[0], j + direction[1], depth + 1];
            if (next[0] > -1 && next[0] < mat.length && next[1] > -1 && next[1] < mat[0].length) {
                if (mat[next[0]][next[1]] === Infinity) {
                    queue.push(next);
                }
            }
        })
    }
    return mat;

};