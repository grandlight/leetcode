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
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  let m = Math.abs(dividend);
  let n = Math.abs(divisor);
  let sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
  if (n === 1) return sign * m;
  let res = 0;
  while (m >= n) {
    let nProd = n;
    let nCount = 1;
    while (m >> 1 >= nProd) {
      nProd <<= 1;
      nCount <<= 1;
    }
    m -= nProd;
    res += nCount;
  }
  return sign * res;
};
// @lc code=end
