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
  let spiral = Array(n)
    .fill(null)
    .map((arr) => Array(n).fill(null));

  // set boundary
  let val = 1,
    top = 0,
    right = n - 1,
    bottom = n - 1,
    left = 0;

  while (1) {
    for (let i = left; i <= right; ++i) spiral[top][i] = val++;
    if (++top > bottom) break;
    for (let i = top; i <= bottom; ++i) spiral[i][right] = val++;
    if (--right < left) break;
    for (let i = right; i >= left; --i) spiral[bottom][i] = val++;
    if (--bottom < top) break;
    for (let i = bottom; i >= top; --i) spiral[i][left] = val++;
    if (++left > right) break;
  }
  return spiral;
};
// @lc code=end
