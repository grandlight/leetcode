/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let res = 0;
  for (let i = s.length - 1; i >= 0; --i) {
    if (s[i] === " ") {
      if (res > 0) {
        return res;
      }
    } else {
      res += 1;
    }
  }
  return res;
};
// @lc code=end
