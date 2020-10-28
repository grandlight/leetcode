/*
 * @lc app=leetcode id=201 lang=javascript
 *
 * [201] Bitwise AND of Numbers Range
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  let shift = 0;
  while (m !== n) {
    m >>>= 1;
    n >>>= 1;
    ++shift;
  }
  return m << shift;
};
// @lc code=end
