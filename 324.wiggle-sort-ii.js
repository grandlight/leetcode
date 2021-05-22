/*
 * @lc app=leetcode id=324 lang=javascript
 *
 * [324] Wiggle Sort II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  const sorted = nums.slice();
  sorted.sort((a, b) => a - b);
  let left = Math.trunc((nums.length - 1) / 2);
  let right = nums.length - 1;
  for (let i = 0; i < nums.length; ++i) {
    nums[i] = i % 2 === 0 ? sorted[left--] : sorted[right--];
  }
};
// @lc code=end
