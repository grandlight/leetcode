/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!s) {
    return true;
  }
  i = 0;
  for (const c of t) {
    if (c === s[i]) {
      ++i;
    }
    if (i === s.length) {
      break;
    }
  }
  return i === s.length;
};
// @lc code=end
