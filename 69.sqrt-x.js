/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;

  let left = 0;
  let right = x;
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid;
    } else if (mid * mid < x) {
      left = mid;
    }
    if (left + 1 === right) return left;
  }
  return right;
};
// @lc code=end
