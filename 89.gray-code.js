/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const res = [0];
  for (let i = 0; i < n; ++i) {
    for (let j = res.length - 1; j >= 0; --j) {
      res.push(res[j] | (1 << i));
    }
  }
  return res;
};
// @lc code=end
