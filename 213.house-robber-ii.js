/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const helper = (start, end) => {
    if (end - start < 2) {
      return nums[start];
    }
    const dp = Array(end).fill(0);
    dp[start] = nums[start];
    dp[start + 1] = Math.max(nums[start], nums[start + 1]);
    for (let i = start + 2; i < end; ++i) {
      dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }
    return dp[dp.length - 1];
  };
  if (nums.length < 2) {
    return nums.length ? nums[0] : 0;
  }
  return Math.max(helper(0, nums.length - 1), helper(1, nums.length));
};
// @lc code=end
