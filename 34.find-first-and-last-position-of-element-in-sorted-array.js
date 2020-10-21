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
  let firstGreaterEqual = (t) => {
    let left = 0;
    let right = nums.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (t <= nums[mid]) right = mid;
      else left = mid + 1;
    }
    return right;
  };

  let start = firstGreaterEqual(target);
  if (nums[start] !== target) return [-1, -1];
  return [start, firstGreaterEqual(target + 1) - 1];
};
// @lc code=end
