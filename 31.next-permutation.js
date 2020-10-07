/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length === 1) return nums;

  for (let i = nums.length - 2; i >= 0; --i) {
    if (nums[i] < nums[i + 1]) {
      for (let j = nums.length - 1; j > i; --j) {
        if (nums[j] > nums[i]) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          break;
        }
      }
      ++i; // reverse from i + 1
      for (let j = nums.length - 1; j > i; ++i, --j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
      return;
    }
  }
  nums.reverse();
};
// @lc code=end
