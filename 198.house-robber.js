/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  return nums.reduce(
    ([prev, curr], money) => {
      return [curr, Math.max(prev + money, curr)];
    },
    [0, 0]
  )[1];
};
// @lc code=end
