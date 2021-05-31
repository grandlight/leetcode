/*
 * @lc app=leetcode id=260 lang=javascript
 *
 * [260] Single Number III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let xy = 0;
  for (const num of nums) {
    xy ^= num;
  }
  const bit = xy ^ (xy & (xy - 1));
  let x = 0;
  for (const num of nums) {
    if (num & bit) {
      x ^= num;
    }
  }
  return [x, xy ^ x];
};
// @lc code=end
