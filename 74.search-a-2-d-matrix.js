/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;
  let left = 0;
  let right = matrix.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (target < matrix[mid][0]) {
      right = mid;
    } else left = mid + 1;
  }
  let row = right === 0 ? right : right - 1;
  left = 0;
  right = matrix[row].length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (target === matrix[row][mid]) return true;
    if (target < matrix[row][mid]) {
      right = mid;
    } else left = mid + 1;
  }
  return false;
};
// @lc code=end
