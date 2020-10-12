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
  let m = board.length;
  let n = board[0].length;

  // 0: dead -> dead
  // 1: live -> live (to keep 0/1 for dead/live)
  // 2: live -> dead
  // 3: dead -> live
  let predictState = (x, y) => {
    let count = 0;
    let state = board[x][y];
    for (let i = -1; i <= 1; ++i) {
      for (let j = -1; j <= 1; ++j) {
        if (i === 0 && j === 0) continue;
        else if (x + i < 0 || x + i >= m) continue;
        else if (y + j < 0 || y + j >= n) continue;
        let neighbor = board[x + i][y + j];
        if (neighbor > 0 && neighbor < 3) ++count;
      }
    }
    if (state === 1 && (count < 2 || count > 3)) return 2;
    else if (state === 0 && count === 3) return 3;
    else return state;
  };

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      board[i][j] = predictState(i, j);
    }
  }
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      board[i][j] %= 2;
    }
  }
};
// @lc code=end
