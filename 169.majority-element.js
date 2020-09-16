/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = {};

  for (let n of nums) {
    count[n] = count[n] + 1 || 1;
    if (count[n] > Math.floor(nums.length / 2)) {
      return n;
    }
  }
};
// @lc code=end
