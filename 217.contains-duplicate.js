/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const lookup = new Set();
  for (const num of nums) {
    if (lookup.has(num)) {
      return true;
    }
    lookup.add(num);
  }
  return false;
};
// @lc code=end
