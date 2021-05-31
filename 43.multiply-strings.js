/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const len1 = num1.length;
  const len2 = num2.length;
  const res = Array(len1 + len2).fill(0);
  for (let i = len1 - 1; i >= 0; --i) {
    for (let j = len2 - 1; j >= 0; --j) {
      res[i + j + 1] += Number(num1[i]) * Number(num2[j]);
      res[i + j] += Math.trunc(res[i + j + 1] / 10);
      res[i + j + 1] %= 10;
    }
  }
  for (let i = 0; i < res.length; ++i) {
    if (res[i]) {
      return res.slice(i).join("");
    }
  }
  return "0";
};
// @lc code=end
