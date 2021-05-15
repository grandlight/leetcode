/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  while (n > 0 && n % 4 === 0) {
    n /= 4;
  }
  return n === 1;

  return n > 0 && Number.isInteger(Math.log10(n) / Math.log10(4));

  return n > 0 && (n & (n - 1)) == 0 && (n & 0x55555555) == n;
};
// @lc code=end
