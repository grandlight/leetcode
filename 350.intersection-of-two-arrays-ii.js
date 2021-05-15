/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const res = [];
  const lookup = {};
  for (const num of nums1) {
    lookup[num] ? ++lookup[num] : (lookup[num] = 1);
  }
  for (const num of nums2) {
    if (lookup[num]) {
      res.push(num);
      --lookup[num];
    }
  }
  return res;
};
// @lc code=end
