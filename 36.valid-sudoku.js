/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const create2dArray = () =>
    Array(9)
      .fill(0)
      .map((x) => Array(9).fill(0));
  const rows = create2dArray();
  const cols = create2dArray();
  const cells = create2dArray();
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      if (board[i][j] === ".") {
        continue;
      }
      const n = board[i][j];
      const c = Math.trunc(i / 3) * 3 + Math.trunc(j / 3);
      if (cells[c][n]) {
        return false;
      } else if (rows[i][n] || cols[j][n]) {
        return false;
      }
      rows[i][n] = 1;
      cols[j][n] = 1;
      cells[c][n] = 1;
    }
  }
  return true;
};
// @lc code=end
