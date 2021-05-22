/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (!s || s[0] === "0") {
    return 0;
  }
  const dp = Array(s.length + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i < s.length + 1; ++i) {
    if (s[i - 1] !== "0") {
      dp[i] = dp[i - 1];
    }
    if (i > 1 && (s[i - 2] === "1" || (s[i - 2] === "2" && s[i - 1] <= "6"))) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[dp.length - 1];
};
// @lc code=end
