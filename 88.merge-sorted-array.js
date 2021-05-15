/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let [i, j, last] = [m - 1, n - 1, m + n - 1];
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[last--] = nums1[i--];
    } else {
      nums1[last--] = nums2[j--];
    }
  }
  while (j >= 0) {
    nums1[last--] = nums2[j--];
  }
};
// @lc code=end
