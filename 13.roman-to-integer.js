/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let rtoi = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let res = rtoi[s[0]];
  for (let i = 1; i < s.length; ++i) {
    res += rtoi[s[i]];
    if (rtoi[s[i]] > rtoi[s[i - 1]]) {
      res -= rtoi[s[i - 1]] * 2;
    }
  }
  return res;
};
// @lc code=end
