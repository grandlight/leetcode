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
  if (!haystack || haystack.length === 0) return -1;

  for (let h = 0; h < haystack.length; ++h) {
    let n = 0;
    while (n < needle.length) {
      if (h + n >= haystack.length) return -1;
      if (haystack[h + n] !== needle[n]) break;
      ++n;
    }
    if (n === needle.length) return h;
  }
  return -1;
};
// @lc code=end
