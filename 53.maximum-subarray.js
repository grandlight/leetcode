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
  let sum = 0;
  let max = -Infinity;
  for (let n of nums) {
    sum = Math.max(n, sum + n);
    max = Math.max(sum, max);
  }
  return max;
};
// @lc code=end
