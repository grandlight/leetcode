/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let res = 0;
  const dp = Array(matrix.length)
    .fill()
    .map(() => Array(matrix[0].length).fill(0));
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[0].length; ++j) {
      if (i === 0 || j === 0) {
        dp[i][j] = Number(matrix[i][j]);
      } else if (matrix[i][j] === "1") {
        dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
      }
      res = Math.max(res, dp[i][j]);
    }
  }
  return res * res;
};
// @lc code=end
