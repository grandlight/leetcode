/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let steps = [1, 1, 0];
  for (let i = 2; i <= n; ++i) {
    steps[i % 3] = steps[(i - 1) % 3] + steps[(i - 2) % 3];
  }
  return steps[n % 3];
};
// @lc code=end
