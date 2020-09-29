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
  let roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let int = 0;
  for (let i = 0; i < s.length - 1; ++i) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      int -= roman[s[i]];
    } else {
      int += roman[s[i]];
    }
  }
  return int + roman[s[s.length - 1]];
};
// @lc code=end
