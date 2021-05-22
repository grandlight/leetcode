/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0;
  while (x !== 0) {
    if (Math.abs(res) > 214748364) {
      return 0;
    }
    res = res * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }
  return res;
};
// @lc code=end
