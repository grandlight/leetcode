/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (!board.length || !board[0].length) return;
  let m = board.length;
  let n = board[0].length;
  let queue = [];

  let check = (i, j) => {
    if (board[i][j] === "O") {
      board[i][j] = "o";
      queue.push([i, j]);
    }
  };

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i !== 0 && i !== m - 1 && j !== 0 && j !== n - 1) continue;
      if (board[i][j] !== "O") continue;
      board[i][j] = "o";

      queue.push([i, j]);
      while (queue.length > 0) {
        let [x, y] = queue.shift();
        if (x - 1 >= 0) check(x - 1, y);
        if (x + 1 < m) check(x + 1, y);
        if (y - 1 >= 0) check(x, y - 1);
        if (y + 1 < n) check(x, y + 1);
      }
    }
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (board[i][j] === "O") board[i][j] = "X";
      if (board[i][j] === "o") board[i][j] = "O";
    }
  }
};
// @lc code=end
