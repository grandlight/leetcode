/*
 * @lc app=leetcode id=97 lang=javascript
 *
 * [97] Interleaving String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }
  const n1 = s1.length;
  const n2 = s2.length;
  const dp = Array(n1 + 1)
    .fill()
    .map(() => Array(n2 + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i < n1 + 1; ++i) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }
  for (let i = 1; i < n2 + 1; ++i) {
    dp[0][i] = dp[0][i - 1] && s2[i - 1] === s3[i - 1];
  }
  for (let i = 1; i < n1 + 1; ++i) {
    for (let j = 1; j < n2 + 1; ++j) {
      dp[i][j] =
        (dp[i - 1][j] && s1[i - 1] === s3[i - 1 + j]) ||
        (dp[i][j - 1] && s2[j - 1] === s3[j - 1 + i]);
    }
  }
  return dp[n1][n2];
};
// @lc code=end
