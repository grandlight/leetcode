/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let res = nums.length + 1;
  let sum = 0;
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    sum += nums[right++];
    while (sum >= target) {
      res = Math.min(res, right - left);
      sum -= nums[left++];
    }
  }
  return res !== nums.length + 1 ? res : 0;
};
// @lc code=end
