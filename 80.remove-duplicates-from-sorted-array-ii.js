/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let len = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (len < 2 || nums[i] !== nums[len - 2]) {
      nums[len++] = nums[i];
    }
  }
  return len;
};
// @lc code=end
