/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const dp = triangle[triangle.length - 1].slice();
  for (let i = triangle.length - 2; i > -1; --i) {
    for (let j = 0; j < i + 1; ++j) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
};
// @lc code=end
