/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let res = 0;
  for (let i = 0; i < nums.length; ++i) {
    res ^= (i + 1) ^ nums[i];
  }
  return res;
};
// @lc code=end
