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
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      ++digits[i];
      return digits;
    }
  }
  digits[0] = 1;
  digits.push(0);
  return digits;
};
// @lc code=end
