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
  let sum = 0;
  for (let ch of s) {
    sum *= 26;
    sum += ch.charCodeAt() - 64;
  }
  return sum;
};
// @lc code=end
