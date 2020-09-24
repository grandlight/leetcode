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
  let sumOfSquares = (num) => {
    let sum = 0;
    while (num) {
      sum += (num % 10) ** 2;
      num = Math.floor(num / 10);
    }
    return sum;
  };

  let appear = {};
  while (!appear[n]) {
    appear[n] = true;
    n = sumOfSquares(n);
    if (n === 1) return true;
  }
  return false;
};
// @lc code=end
