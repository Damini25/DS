/**
 * total no. of ways in which n knights can be placed on n*n board so that they don't attach each other
 * @param {*} n 
 */

function nKnights(n) {
    let board = new Array(n).fill(0).map(() => new Array(n).fill("."));
    let res = [];
   
    function recur(r, c, n) {
       // console.log("n", r, c, n, board);

        if (n === 0) {
            let arr = [];
            for (let i = 0; i < board.length; i++) {
                arr.push(board[i].join(""));
            }
            res.push(arr);
            return;
        }

        if (r === board.length - 1 && c > board[0].length - 1) {
            return;
        }

        if (c === board[0].length) {
            recur(r + 1, 0, n);
            return;
        }
        const canPlace = canPlaceKnight(r, c, board);
        if (canPlace) {
            board[r][c] = "K";
            recur(r, c + 1, n - 1);
            board[r][c] = ".";
        }

        recur(r, c + 1, n);

        return;
    }
    recur(0, 0, n);
    return res;
}

function canPlaceKnight(i, j, board) {
    const list = [
        [-1, -2],
        [-1, 2],
        [-2, -1],
        [-2, 1],
    ];
    for (let k = 0; k < list.length; k++) {
        const [x, y] = list[k];
        if (i + x >= 0 && j + y >= 0 && j + y < board[0].length) {
            if (board[i + x][j + y] === "K") return false;
        }
    }
    return true;
}
console.log(nKnights(4));
