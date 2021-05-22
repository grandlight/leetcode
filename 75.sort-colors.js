/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let i = 0;
  let red = 0;
  let blue = nums.length - 1;
  while (i <= blue) {
    if (nums[i] === 0) {
      [nums[i], nums[red]] = [nums[red], nums[i]];
      ++red, ++i;
    } else if (nums[i] === 2) {
      [nums[i], nums[blue]] = [nums[blue], nums[i]];
      --blue;
    } else {
      ++i;
    }
  }
};
// @lc code=end
