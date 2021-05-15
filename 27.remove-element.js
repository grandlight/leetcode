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
  let i = 0;
  for (const num of nums) {
    if (num !== val) {
      nums[i++] = num;
    }
  }
  return i;
};
// @lc code=end
