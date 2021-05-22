/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const reverse = (i, j) => {
    while (i < j) {
      const tmp = nums[i];
      nums[i++] = nums[j];
      nums[j--] = tmp;
    }
  };
  const len = nums.length;
  if (!len || k % len === 0) {
    return;
  }
  k %= len;
  reverse(0, len - 1);
  reverse(0, k - 1);
  reverse(k, len - 1);
};
// @lc code=end
