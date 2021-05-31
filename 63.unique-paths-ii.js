/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  dp[0][1] = 1;
  for (let i = 1; i < m + 1; ++i) {
    for (let j = 1; j < n + 1; ++j) {
      if (obstacleGrid[i - 1][j - 1] === 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m][n];
};
// @lc code=end
