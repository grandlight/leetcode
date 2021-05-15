/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let res = 0;
  while (n > 0) {
    n = Math.trunc(n / 5);
    res += n;
  }
  return res;
};
// @lc code=end
