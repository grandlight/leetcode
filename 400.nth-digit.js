/*
 * @lc app=leetcode id=400 lang=javascript
 *
 * [400] Nth Digit
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let digitLen = 1;
  let count = 9;
  let start = 1;
  while (digitLen * count < n) {
    n -= digitLen * count;
    digitLen += 1;
    count *= 10;
    start *= 10;
  }
  start += Math.trunc((n - 1) / digitLen);
  return Number(`${start}`[(n - 1) % digitLen]);
};
// @lc code=end
