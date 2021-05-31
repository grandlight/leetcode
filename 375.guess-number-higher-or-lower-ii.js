/*
 * @lc app=leetcode id=375 lang=javascript
 *
 * [375] Guess Number Higher or Lower II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
  const dp = Array(n + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  for (let i = 2; i < n + 1; ++i) {
    for (let j = i - 1; j > 0; --j) {
      let globalMin = Infinity;
      for (let k = j + 1; k < i; ++k) {
        let localMax = k + Math.max(dp[j][k - 1], dp[k + 1][i]);
        globalMin = Math.min(globalMin, localMax);
      }
      dp[j][i] = j === i - 1 ? j : globalMin;
    }
  }
  return dp[1][n];
};
// @lc code=end
