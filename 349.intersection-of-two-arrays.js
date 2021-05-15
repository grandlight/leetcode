/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const res = [];
  const lookup = new Set();
  for (const num of nums1) {
    lookup.add(num);
  }
  for (const num of nums2) {
    if (lookup.has(num)) {
      res.push(num);
      lookup.delete(num);
    }
  }
  return res;
};
// @lc code=end
