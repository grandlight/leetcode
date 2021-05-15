/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const isAlphanumeric = (ch) => {
    return ("a" <= ch && ch <= "z") || ("0" <= ch && ch <= "9");
  };
  const str = s.toLowerCase();
  for (let i = 0, j = str.length - 1; i < j; ++i, --j) {
    while (!isAlphanumeric(str[i]) && i < j) ++i;
    while (!isAlphanumeric(str[j]) && i < j) --j;
    if (i < j && str[i] !== str[j]) return false;
  }
  return true;
};
// @lc code=end
