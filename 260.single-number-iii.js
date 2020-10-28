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
  let diff = nums.reduce((accu, curr) => (accu ^= curr), 0);
  diff &= -diff;
  let res = [0, 0];
  for (let num of nums) {
    diff & num ? (res[0] ^= num) : (res[1] ^= num);
  }
  return res;
};
// @lc code=end
