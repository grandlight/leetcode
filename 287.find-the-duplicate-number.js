/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let left = 1;
  let right = nums.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;
    for (let num of nums) {
      if (num <= mid) count++;
    }
    if (count <= mid) {
      left = mid + 1;
    } else right = mid;
  }
  return right;
};
// @lc code=end
