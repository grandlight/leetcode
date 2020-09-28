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
  let digits = [];
  while (x) {
    digits.push(x % 10);
    x = Math.floor(x / 10);
  }
  for (let i = 0; i < digits.length / 2; ++i) {
    if (digits[i] !== digits[digits.length - 1 - i]) return false;
  }
  return true;
};
// @lc code=end
