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
  if (!board || !board[0]) return false;
  let m = board.length;
  let n = board[0].length;

  let dfs = (i, j, w) => {
    if (w === word.length) return true;
    if (i < 0 || j < 0 || i >= m || j >= n) return false;
    if (board[i][j] !== word[w]) return false;
    board[i][j] = " ";
    let b =
      dfs(i, j - 1, w + 1) ||
      dfs(i - 1, j, w + 1) ||
      dfs(i, j + 1, w + 1) ||
      dfs(i + 1, j, w + 1);
    board[i][j] = word[w];
    return b;
  };

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;
};
// @lc code=end
