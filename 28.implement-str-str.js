/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle || needle.length === 0) return 0;
  for (let i = 0; i < haystack.length; ++i) {
    for (let j = 0; j < needle.length + 1; ++j) {
      if (j === needle.length) {
        return i;
      } else if (i + j === haystack.length) {
        return -1;
      } else if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
  }
  return -1;
};
// @lc code=end
