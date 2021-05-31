/*
 * @lc app=leetcode id=397 lang=javascript
 *
 * [397] Integer Replacement
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  let res = 0;
  while (n !== 1) {
    if (n === 3) {
      --n;
    } else if ((n & 3) === 3) {
      ++n;
    } else if ((n & 3) === 1) {
      --n;
    } else {
      n = Math.trunc(n / 2);
    }
    ++res;
  }
  return res;
};
// @lc code=end
