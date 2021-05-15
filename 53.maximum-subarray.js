/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = -Infinity;
  let cur = 0;
  for (const num of nums) {
    cur = Math.max(cur + num, num);
    res = Math.max(res, cur);
  }
  return res;
};
// @lc code=end
