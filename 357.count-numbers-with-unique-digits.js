/*
 * @lc app=leetcode id=357 lang=javascript
 *
 * [357] Count Numbers with Unique Digits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) {
    return 1;
  }
  let res = 10;
  let cnt = 9;
  for (let i = 2; i < n + 1; ++i) {
    cnt *= 11 - i; // 9 - (i - 2)
    res += cnt;
  }
  return res;
};
// @lc code=end
