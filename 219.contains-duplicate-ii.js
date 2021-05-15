/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const lookup = {};
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] in lookup && i - lookup[nums[i]] <= k) {
      return true;
    }
    lookup[nums[i]] = i;
  }
  return false;
};
// @lc code=end
