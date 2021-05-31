/*
 * @lc app=leetcode id=377 lang=javascript
 *
 * [377] Combination Sum IV
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  nums.sort((a, b) => a - b);
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i < target + 1; ++i) {
    for (let j = 0; j < nums.length; ++j) {
      if (nums[j] <= i) {
        dp[i] += dp[i - nums[j]];
      } else {
        break;
      }
    }
  }
  return dp[target];
};
// @lc code=end
