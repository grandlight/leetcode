/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix.length;
  let tmp;
  for (let i = 0; i < n / 2; ++i) {
    for (let j = n - 1; j >= n / 2; --j) {
      tmp = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = matrix[j][i];
      matrix[j][i] = matrix[n - 1 - i][j];
      matrix[n - 1 - i][j] = matrix[n - 1 - j][n - 1 - i];
      matrix[n - 1 - j][n - 1 - i] = tmp;
    }
  }
};
// @lc code=end
