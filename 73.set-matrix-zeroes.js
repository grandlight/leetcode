/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let isFirstColZero = false;
  let isFirstRowZero = false;

  for (let i = 0; i < m && !isFirstColZero; ++i) {
    if (matrix[i][0] === 0) {
      isFirstColZero = true;
    }
  }
  for (let i = 0; i < n && !isFirstRowZero; ++i) {
    if (matrix[0][i] === 0) {
      isFirstRowZero = true;
    }
  }
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      if (!matrix[i][j]) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      if (!matrix[i][0] || !matrix[0][j]) {
        matrix[i][j] = 0;
      }
    }
  }
  if (isFirstColZero) {
    for (let i = 0; i < m; ++i) {
      matrix[i][0] = 0;
    }
  }
  if (isFirstRowZero) {
    for (let i = 0; i < n; ++i) {
      matrix[0][i] = 0;
    }
  }
};
// @lc code=end
