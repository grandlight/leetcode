/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  return strs.reduce((prefix, str) => {
    let i = 0;
    while (prefix[i] && str[i] && prefix[i] === str[i]) ++i;
    return prefix.slice(0, i);
  });
};
// @lc code=end
