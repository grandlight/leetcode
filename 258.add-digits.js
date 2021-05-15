/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  return num !== 0 ? ((num - 1) % 9) + 1 : 0;

  while (num > 9) {
    let sum = 0;
    while (num) {
      sum += num % 10;
      num = Math.trunc(num / 10);
    }
    num = sum;
  }
  return num;
};
// @lc code=end
