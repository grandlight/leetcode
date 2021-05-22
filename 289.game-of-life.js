/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const m = board.length;
  const n = board[0].length;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      let live = 0;
      for (let x = Math.max(i - 1, 0); x < Math.min(i + 2, m); ++x) {
        for (let y = Math.max(j - 1, 0); y < Math.min(j + 2, n); ++y) {
          live += board[x][y] & 1;
        }
      }
      if (live === 3 || (board[i][j] && live === 4)) {
        board[i][j] |= 2;
      }
    }
  }
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      board[i][j] >>= 1;
    }
  }
};
// @lc code=end
