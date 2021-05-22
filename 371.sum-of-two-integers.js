/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while ((a & b) !== 0) {
    const carry = (a & b) << 1;
    a ^= b;
    b = carry;
  }
  return a ^ b;
};
// @lc code=end
