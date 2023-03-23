var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  visited.add(0);

  const dfs = (room) => {
    visited.add(room);

    for (let key of rooms[room]) {
      if (!visited.has(key)) {
        dfs(key);
      }
    }
  };

  dfs(0);
  return visited.size === rooms.length;
};
