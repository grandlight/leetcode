/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;
  for (const num of nums) {
    if (first >= num) {
      first = num;
    } else if (second >= num) {
      second = num;
    } else {
      return true;
    }
  }
  return false;
};
// @lc code=end
