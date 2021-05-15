/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let res = "";
  while (n) {
    res = String.fromCharCode(((n - 1) % 26) + 65) + res;
    n = Math.trunc((n - 1) / 26);
  }
  return res;
};
// @lc code=end
