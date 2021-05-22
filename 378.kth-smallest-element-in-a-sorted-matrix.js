/*
 * @lc app=leetcode id=378 lang=javascript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let left = matrix[0][0];
  let right = matrix[matrix.length - 1][matrix[0].length - 1];
  while (left < right) {
    const mid = left + Math.trunc((right - left) / 2);
    let count = 0;
    for (let i = 0; i < matrix.length; ++i) {
      for (let j = 0; j < matrix.length; ++j) {
        if (matrix[i][j] > mid) {
          break;
        }
        ++count;
      }
    }
    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
};
// @lc code=end
