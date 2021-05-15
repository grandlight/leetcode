/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const lookup = {};
  for (const c of s) {
    lookup[c] ? ++lookup[c] : (lookup[c] = 1);
  }
  for (let i = 0; i < s.length; ++i) {
    if (lookup[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};
// @lc code=end
