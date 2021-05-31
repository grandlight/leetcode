/*
 * @lc app=leetcode id=390 lang=javascript
 *
 * [390] Elimination Game
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  let start = 1;
  let step = 2;
  let direction = 1;
  while (n > 1) {
    start += direction * (step * Math.trunc(n / 2) - step / 2);
    n = Math.trunc(n / 2);
    step *= 2;
    direction *= -1;
  }
  return start;
};
// @lc code=end
