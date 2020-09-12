/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; --i) {
    if (++digits[i] < 10) {
      break;
    }
    digits[i] = 0;
    if (i === 0) {
      digits.unshift(1);
    }
  }
  return digits;
};
// @lc code=end
