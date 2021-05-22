/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = -Infinity;
  let mx = 1;
  let mn = 1;
  for (const num of nums) {
    [mx, mn] = [
      Math.max(num, mx * num, mn * num),
      Math.min(num, mx * num, mn * num),
    ];
    res = Math.max(res, mx);
  }
  return res;
};
// @lc code=end
