/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < n + 1; ++i) {
    for (let j = 1; i + j * j < n + 1; ++j) {
      dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1);
    }
  }
  return dp[n];
};
// @lc code=end
