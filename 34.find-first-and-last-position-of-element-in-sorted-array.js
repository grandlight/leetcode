/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const helper = (t) => {
    let [left, right] = [0, nums.length];
    while (left < right) {
      const mid = left + Math.trunc((right - left) / 2);
      if (nums[mid] < t) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return right;
  };

  const start = helper(target);
  if (start === nums.length || nums[start] !== target) {
    return [-1, -1];
  }
  return [start, helper(target + 1) - 1];
};
// @lc code=end
