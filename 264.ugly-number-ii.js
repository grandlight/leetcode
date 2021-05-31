/*
 * @lc app=leetcode id=264 lang=javascript
 *
 * [264] Ugly Number II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const ugly = [1];
  let i2 = 0;
  let i3 = 0;
  let i5 = 0;
  while (ugly.length < n) {
    while (ugly[i2] * 2 <= ugly[ugly.length - 1]) {
      ++i2;
    }
    while (ugly[i3] * 3 <= ugly[ugly.length - 1]) {
      ++i3;
    }
    while (ugly[i5] * 5 <= ugly[ugly.length - 1]) {
      ++i5;
    }
    ugly.push(Math.min(ugly[i2] * 2, ugly[i3] * 3, ugly[i5] * 5));
  }
  return ugly[ugly.length - 1];
};
// @lc code=end
