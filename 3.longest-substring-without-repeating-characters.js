/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0;
  const window = {};
  let [left, right] = [0, 0];
  while (right < s.length) {
    const cRight = s[right];
    ++right;
    window[cRight] ? ++window[cRight] : (window[cRight] = 1);
    while (window[cRight] > 1) {
      const cLeft = s[left];
      ++left;
      --window[cLeft];
    }
    res = Math.max(res, right - left);
  }
  return res;
};
// @lc code=end
