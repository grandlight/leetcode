/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  while (k--) {
    let tmp = nums[nums.length - 1];
    for (let i = nums.length - 1; i > 0; --i) {
      nums[i] = nums[i - 1];
    }
    nums[0] = tmp;
  }
};
// @lc code=end
