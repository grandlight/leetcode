/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const res = new Array(rowIndex + 1).fill(0);
  res[0] = 1;
  for (let i = 1; i < rowIndex + 1; ++i) {
    for (let j = i; j > 0; --j) {
      res[j] += res[j - 1];
    }
  }
  return res;
};
// @lc code=end
