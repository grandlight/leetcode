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
  let i = 0;
  for (let n of nums) {
    if (n !== 0) {
      nums[i++] = n;
    }
  }
  while (i < nums.length) {
    nums[i++] = 0;
  }
};
// @lc code=end
