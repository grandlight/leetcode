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
  let last = {};
  for (let i in nums) {
    if (i - last[nums[i]] <= k) {
      return true;
    }
    last[nums[i]] = i;
  }
  return false;
};
// @lc code=end
