/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    // 중복되지 않도록 set으로 설정
    const visited = new Set();
    let islandNum = 0;

    const recursive = (i) => {
        for (let j = 0; j < isConnected.length; j++) {
            if (isConnected[i][j] === 1 && !visited.has(j)) {
                visited.add(j);
                recursive(j);
            }
        }
    }

    for (let i = 0; i < isConnected.length; i++) {
        if (!visited.has(i)) {
            recursive(i);
            islandNum++;
        }

    }

    return islandNum;

};