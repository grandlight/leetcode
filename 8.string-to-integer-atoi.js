/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let i = 0;
  while (i < s.length && s[i] === " ") {
    ++i;
  }
  if (i === s.length) {
    return 0;
  }

  let sign = s[i] === "-" ? -1 : 1;
  if (s[i] === "+" || s[i] === "-") {
    ++i;
  }

  let res = 0;
  while (i < s.length && s[i].match(/\d/)) {
    if (res > (2147483647 - parseInt(s[i])) / 10) {
      return sign === 1 ? 2147483647 : -2147483648;
    }
    res = res * 10 + parseInt(s[i++]);
  }
  return sign * res;
};
// @lc code=end
