/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prod = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; ++i) {
    prod[i] = prod[i - 1] * nums[i - 1];
  }
  let tmp = 1; // product of right side
  for (let i = nums.length - 1; i >= 0; --i) {
    prod[i] *= tmp;
    tmp *= nums[i];
  }
  return prod;
};
// @lc code=end
