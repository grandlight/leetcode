/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const lookup = {};
  while (n !== 1 && !(n in lookup)) {
    let sum = 0;
    lookup[n] = true;
    while (n > 0) {
      sum += (n % 10) ** 2;
      n = Math.trunc(n / 10);
    }
    n = sum;
  }
  return n === 1;
};
// @lc code=end
