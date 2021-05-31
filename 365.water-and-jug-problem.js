/*
 * @lc app=leetcode id=365 lang=javascript
 *
 * [365] Water and Jug Problem
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function (x, y, z) {
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };
  if (z === 0) {
    return true;
  } else if (x + y >= z && z % gcd(x, y) === 0) {
    return true;
  }
  return false;
};
// @lc code=end
