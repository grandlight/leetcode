/*
 * @lc app=leetcode id=304 lang=javascript
 *
 * [304] Range Sum Query 2D - Immutable
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.dp = [] = Array(matrix.length + 1)
    .fill()
    .map(() => Array(matrix[0].length + 1).fill(0));
  for (let i = 1; i < matrix.length + 1; ++i) {
    for (let j = 1; j < matrix[0].length + 1; ++j) {
      this.dp[i][j] = this.dp[i][j - 1] + this.dp[i - 1][j];
      this.dp[i][j] += matrix[i - 1][j - 1] - this.dp[i - 1][j - 1];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let res = this.dp[row2 + 1][col2 + 1];
  res -= this.dp[row2 + 1][col1] + this.dp[row1][col2 + 1];
  return res + this.dp[row1][col1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
