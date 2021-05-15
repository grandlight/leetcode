/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  res = 0;
  for (const c of s) {
    res ^= c.charCodeAt();
  }
  for (const c of t) {
    res ^= c.charCodeAt();
  }
  return String.fromCharCode(res);
};
// @lc code=end
