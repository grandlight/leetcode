/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const helper = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      --left;
      ++right;
    }
    return right - left - 1;
  };
  let [left, right] = [-1, -2];
  for (let i = 0; i < s.length; ++i) {
    const maxLen = Math.max(helper(i, i), helper(i, i + 1));
    if (maxLen > right - left + 1) {
      left = i - Math.trunc((maxLen - 1) / 2);
      right = left + maxLen - 1;
    }
  }
  return left >= 0 ? s.slice(left, right + 1) : "";
};
// @lc code=end
