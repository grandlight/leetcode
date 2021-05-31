/*
 * @lc app=leetcode id=343 lang=javascript
 *
 * [343] Integer Break
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  const dp = Array(n + 1).fill(1);
  for (let i = 3; i < n + 1; ++i) {
    for (let j = 1; j < i; ++j) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }
  return dp[n];

  if (n < 4) {
    return n - 1;
  }
  let res = 0;
  if (n % 3 === 0) {
    res = 3 ** Math.trunc(n / 3);
  } else if (n % 3 === 2) {
    res = 3 ** Math.trunc(n / 3) * 2;
  } else {
    res = 3 ** (Math.trunc(n / 3) - 1) * 4;
  }
  return res;
};
// @lc code=end
