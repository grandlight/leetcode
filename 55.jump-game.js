/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let reach = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (i > reach) {
      return false;
    }
    reach = Math.max(reach, i + nums[i]);
  }
  return reach >= nums.length - 1;
};
// @lc code=end
