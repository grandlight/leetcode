/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < nums[right]) {
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    } else {
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    }
  }
  return -1;
};
// @lc code=end
