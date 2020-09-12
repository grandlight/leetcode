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
  if (rowIndex === 0) return [1];
  let ans = [1, 1];
  for (let i = 1; i < rowIndex; ++i) {
    for (let j = i; j > 0; --j) {
      ans[j] += ans[j - 1];
    }
    ans[i + 1] = 1;
  }
  return ans;
};
// @lc code=end
