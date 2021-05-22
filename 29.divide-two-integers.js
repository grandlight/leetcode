/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) {
    return 2147483647;
  }
  let res = 0;
  let dvd = Math.abs(dividend);
  let dvs = Math.abs(divisor);
  while (dvd >= dvs) {
    let tmpDvs = dvs;
    let cntDvs = 1;
    while (dvd >> 1 >= tmpDvs) {
      tmpDvs <<= 1;
      cntDvs <<= 1;
    }
    dvd -= tmpDvs;
    res += cntDvs;
  }
  return (dividend < 0) ^ (divisor < 0) ? -res : res;
};
// @lc code=end
