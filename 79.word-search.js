/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const helper = (idx, i, j) => {
    if (idx === word.length) {
      return true;
    } else if (i < 0 || j < 0 || i >= m || j >= n) {
      return false;
    } else if (board[i][j] !== word[idx]) {
      return false;
    }
    const w = board[i][j];
    board[i][j] = "#";
    let res = helper(idx + 1, i, j + 1) || helper(idx + 1, i, j - 1);
    res |= helper(idx + 1, i + 1, j) || helper(idx + 1, i - 1, j);
    board[i][j] = w;
    return res;
  };
  const m = board.length;
  const n = board[0].length;
  const res = [];
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (helper(0, i, j)) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end
