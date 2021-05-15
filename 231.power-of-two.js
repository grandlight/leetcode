/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let res = 0;
  while (n > 0) {
    res += n & 1;
    n >>= 1;
  }
  return res === 1;
};
// @lc code=end
