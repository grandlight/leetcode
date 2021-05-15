/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let res = "";
  let [value, carry] = [0, 0];
  let [i, j] = [a.length - 1, b.length - 1];
  while (i > -1 || j > -1) {
    value = carry;
    if (i > -1) {
      value += parseInt(a[i--]);
    }
    if (j > -1) {
      value += parseInt(b[j--]);
    }
    carry = Math.trunc(value / 2);
    value %= 2;
    res = `${value}${res}`;
  }
  return carry ? `1${res}` : res;
};
// @lc code=end
