/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    let h = Math.min(height[i], height[j]);
    max = Math.max(max, h * (j - i));
    height[i] > height[j] ? --j : ++i;
  }
  return max;
};
// @lc code=end
