/*
 * @lc app=leetcode id=220 lang=javascript
 *
 * [220] Contains Duplicate III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const window = new Map();
  for (const num of nums) {
    if (window.size > k) {
      window.delete(Array.from(window.keys())[0]);
    }
    const bucket = t ? Math.trunc(num / t) : num;
    for (let i = -1; i < 2; ++i) {
      const n = window.get(bucket + i);
      if (n !== undefined && Math.abs(num - n) <= t) {
        return true;
      }
    }
    window.set(bucket, num);
  }
  return false;
};
// @lc code=end
