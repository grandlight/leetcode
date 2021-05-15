/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let rev = 0;
  let xx = x;
  while (xx) {
    rev = rev * 10 + (xx % 10);
    xx = Math.trunc(xx / 10);
  }
  return rev === x;
};
// @lc code=end
