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
  if (numRows === 0) return [];
  let ans = [];
  for (let i = 0; i < numRows; ++i) {
    ans[i] = [1];
    for (let j = 0; j < i; ++j) {
      ans[i].push(ans[i - 1][j] + ans[i - 1][j + 1]);
    }
    ans[i][i] = 1;
  }
  return ans;
};
// @lc code=end
