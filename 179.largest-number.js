/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const res = nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
  return res[0] === "0" ? "0" : res;
};
// @lc code=end
