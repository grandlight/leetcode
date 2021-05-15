/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let res = 0;
  for (const c of s) {
    res = res * 26 + c.charCodeAt() - 64;
  }
  return res;
};
// @lc code=end
