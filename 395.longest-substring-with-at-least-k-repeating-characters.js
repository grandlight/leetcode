/*
 * @lc app=leetcode id=395 lang=javascript
 *
 * [395] Longest Substring with At Least K Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  const helper = (start, end) => {
    const count = {};
    for (let i = start; i < end; ++i) {
      count[s[i]] = (count[s[i]] || 0) + 1;
    }
    let len = 0;
    i = start;
    while (i < end) {
      while (i < end && count[s[i]] < k) {
        ++i;
      }
      j = i;
      while (j < end && count[s[j]] >= k) {
        ++j;
      }
      if (i === start && j === end) {
        return j - i;
      }
      len = Math.max(len, helper(i, j));
      i = j;
    }
    return len;
  };
  return helper(0, s.length);
};
// @lc code=end
