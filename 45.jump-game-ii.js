/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let curr = 0;
  let reach = 0;
  let count = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (i > reach) {
      return -1;
    }
    if (i > curr) {
      curr = reach;
      ++count;
    }
    reach = Math.max(reach, i + nums[i]);
  }
  return count;
};
// @lc code=end
