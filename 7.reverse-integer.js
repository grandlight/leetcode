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
  let absX = Math.abs(x);
  let ans = 0;
  while (absX) {
    ans = ans * 10 + (absX % 10);
    absX = Math.floor(absX / 10);
  }
  ans = x < 0 ? -ans : ans;
  if (ans < -1 * 2 ** 31 || 2 ** 31 - 1 < ans) {
    return 0;
  }
  return ans;
};
// @lc code=end
