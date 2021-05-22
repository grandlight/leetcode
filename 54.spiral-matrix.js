/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = [];
  let [left, right] = [0, matrix[0].length - 1];
  let [top, bottom] = [0, matrix.length - 1];
  while (left <= right && top <= bottom) {
    for (let i = left; i < right + 1; ++i) {
      res.push(matrix[top][i]);
    }
    if (++top > bottom) {
      break;
    }

    for (let i = top; i < bottom + 1; ++i) {
      res.push(matrix[i][right]);
    }
    if (--right < left) {
      break;
    }

    for (let i = right; i > left - 1; --i) {
      res.push(matrix[bottom][i]);
    }
    if (--bottom < top) {
      break;
    }

    for (let i = bottom; i > top - 1; --i) {
      res.push(matrix[i][left]);
    }
    if (++left > right) {
      break;
    }
  }
  return res;
};
// @lc code=end
