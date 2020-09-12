/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length === 0) return 0;
  let len = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== val) {
      nums[len++] = nums[i];
    }
  }
  return len;
};
// @lc code=end
