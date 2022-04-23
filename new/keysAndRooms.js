var canVisitAllRooms = function (rooms) {
    let visited = {};
    let q = [0];
    while (q.length) {
        let c = q.shift();
        if (!visited.hasOwnProperty(c)) {
            visited[c] = true;
            if (rooms[c].length) {
                q.push(...rooms[c]);
            }
        }
    }
    return Object.keys(visited).length === rooms.length;
};

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let visited = new Set(), count = 0;
    dfs(0);
    function dfs(curr) {
        if (!visited.has(curr)) {
            visited.add(curr)
            count++;
            for (let i = 0; i < rooms[curr].length; i++) {
                if (!visited.has(rooms[curr][i])) {
                    dfs(rooms[curr][i]);
                }
            }
        }
        return;
    }
    return count === rooms.length;
};
