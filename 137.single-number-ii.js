/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let res = 0;
  for (let i = 0; i < 32; ++i) {
    let bit = 0;
    for (let num of nums) {
      bit += (num >> i) & 1;
    }
    res |= bit % 3 << i;
  }
  return res;
};
// @lc code=end
