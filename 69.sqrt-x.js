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
  let [left, right] = [0, x];
  while (left < right) {
    let mid = left + Math.trunc((right - left) / 2);
    if (mid <= x / mid) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right - 1;
};
// @lc code=end
