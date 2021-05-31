/*
 * @lc app=leetcode id=373 lang=javascript
 *
 * [373] Find K Pairs with Smallest Sums
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const res = [];
  for (let i = 0; i < Math.min(nums1.length, k); ++i) {
    for (let j = 0; j < Math.min(nums2.length, k); ++j) {
      res.push([nums1[i], nums2[j]]);
    }
  }
  res.sort((a, b) => a[0] + a[1] - b[0] - b[1]);
  return res.length > k ? res.slice(0, k) : res;
};
// @lc code=end
