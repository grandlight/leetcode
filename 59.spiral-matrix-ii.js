/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const res = Array(n)
    .fill()
    .map(() => Array(n));
  let val = 1;
  let [left, right, top, bottom] = [0, n - 1, 0, n - 1];
  while (left <= right && top <= bottom) {
    for (let i = left; i < right + 1; ++i) {
      res[top][i] = val++;
    }
    if (++top > bottom) {
      break;
    }

    for (let i = top; i < bottom + 1; ++i) {
      res[i][right] = val++;
    }
    if (--right < left) {
      break;
    }

    for (let i = right; i > left - 1; --i) {
      res[bottom][i] = val++;
    }
    if (--bottom < top) {
      break;
    }

    for (let i = bottom; i > top - 1; --i) {
      res[i][left] = val++;
    }
    if (++left > right) {
      break;
    }
  }
  return res;
};
// @lc code=end
