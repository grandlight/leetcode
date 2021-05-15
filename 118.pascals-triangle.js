/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = [];
  for (let i = 0; i < numRows; ++i) {
    res.push(new Array(i + 1).fill(1));
    for (let j = 1; j < i; ++j) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
    }
  }
  return res;
};
// @lc code=end
