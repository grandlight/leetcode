/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 3) {
    return n;
  }
  const dp = [1, 2].concat(new Array(n - 2));
  for (let i = 2; i < n; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};
// @lc code=end
