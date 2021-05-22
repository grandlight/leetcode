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
  const leftProd = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; ++i) {
    leftProd[i] = leftProd[i - 1] * nums[i - 1];
  }
  let rightProd = 1;
  for (let i = nums.length - 2; i > -1; --i) {
    rightProd *= nums[i + 1];
    leftProd[i] *= rightProd;
  }
  return leftProd;
};
// @lc code=end
