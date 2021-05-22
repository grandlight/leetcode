/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let i = 0;
  let j = matrix[0].length - 1;
  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    }
    matrix[i][j] > target ? --j : ++i;
  }
  return false;
};
// @lc code=end
