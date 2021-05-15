/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }
  const pw = {};
  const wp = {};
  for (let i = 0; i < pattern.length; ++i) {
    if (!(pattern[i] in pw)) {
      if (words[i] in wp) {
        return false;
      }
      pw[pattern[i]] = words[i];
      wp[words[i]] = pattern[i];
    } else if (pw[pattern[i]] !== words[i]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
