/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let start = 0,
    sum = 0,
    min = Infinity;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    if (sum >= s) {
      while (sum - nums[start] >= s) {
        sum -= nums[start++];
      }
      min = Math.min(min, i - start + 1);
    }
  }
  return sum >= s ? min : 0;
};
// @lc code=end
