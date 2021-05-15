/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const lookup = {};
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] in lookup) {
      return [lookup[nums[i]], i];
    }
    lookup[target - nums[i]] = i;
  }
};
// @lc code=end
