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
  if (x <= 1) return x;
  let left = 0;
  let right = x;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid <= x) left = mid + 1;
    else right = mid;
  }
  return right - 1;
};
// @lc code=end
