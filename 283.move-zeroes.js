/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zero = 0;
  for (const num of nums) {
    if (num !== 0) {
      nums[zero++] = num;
    }
  }
  while (zero < nums.length) {
    nums[zero++] = 0;
  }
};
// @lc code=end
