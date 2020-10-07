/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let spiral = [];
  while (matrix.length) {
    spiral.push(...matrix.shift());
    for (let row of matrix) {
      if (row.length) {
        spiral.push(row.pop());
      }
      row.reverse();
    }
    matrix.reverse();
  }
  return spiral;
};
// @lc code=end
