/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) {
    return true;
  }

  let [left, right] = [0, num];
  while (left < right) {
    const mid = left + Math.trunc((right - left) / 2);
    if (mid < num / mid) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right * right === num;
};
// @lc code=end
