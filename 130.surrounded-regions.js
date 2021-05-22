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
  const m = board.length;
  const n = board[0].length;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if ((0 < i && i < m - 1 && 0 < j && j < n - 1) || board[i][j] !== "O") {
        continue;
      }
      const q = [[i, j]];
      while (q.length) {
        const [x, y] = q.shift();
        if (0 <= x && x < m && 0 <= y && y < n && board[x][y] === "O") {
          board[x][y] = "#";
          q.push([x, y + 1], [x, y - 1], [x + 1, y], [x - 1, y]);
        }
      }
    }
  }
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      } else if (board[i][j] === "#") {
        board[i][j] = "O";
      }
    }
  }
};
// @lc code=end
