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
  let title = "";

  while (n) {
    title = String.fromCharCode(((n - 1) % 26) + 65) + title;
    n = Math.floor((n - 1) / 26);
  }
  return title;
};
// @lc code=end
