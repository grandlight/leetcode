/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let [left, right] = [1, n];
  while (left < right) {
    const mid = left + Math.trunc((right - left) / 2);
    if (guess(mid) === 0) {
      return mid;
    } else if (guess(mid) === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};
// @lc code=end
