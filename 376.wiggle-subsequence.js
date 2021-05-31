/*
 * @lc app=leetcode id=376 lang=javascript
 *
 * [376] Wiggle Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  let positive = 1;
  let negative = 1;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i - 1] < nums[i]) {
      positive = negative + 1;
    } else if (nums[i - 1] > nums[i]) {
      negative = positive + 1;
    }
  }
  return Math.min(nums.length, Math.max(positive, negative));
};
// @lc code=end
