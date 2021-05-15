/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  while (n > 0 && n % 3 === 0) {
    n /= 3;
  }
  return n === 1;

  return n > 0 && Number.isInteger(Math.log10(n) / Math.log10(3));
};
// @lc code=end
