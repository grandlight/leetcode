/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let len = 0;
  let queue = [n];

  while (queue.length > 0) {
    for (let q = queue.length; q > 0; --q) {
      let num = queue.shift();
      if (num === 0) return len;
      for (let i = 1; i * i <= num; ++i) {
        queue.push(num - i * i);
      }
    }
    ++len;
  }

  return len;
};
// @lc code=end
